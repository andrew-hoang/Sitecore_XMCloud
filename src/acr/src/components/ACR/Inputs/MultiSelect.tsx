import { InputsProps } from './Inputs.props';

import { Flex, Text } from '@radix-ui/themes';
import Checkbox from './Checkbox';
import Icon from '../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import { useSelect, useMultipleSelection } from 'downshift';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

export type SelectItem = { value: string; label: string };

type DropdropProps = InputsProps & {
  items: SelectItem[];
  defaultSelectedItems?: SelectItem[];
  placeholder?: string;
  onChange?: (selectedItem: SelectItem | null) => void;
};

const MultiSelect = (props: DropdropProps) => {
  const { label, items, placeholder, className, defaultSelectedItems = [], onChange } = props;

  const { getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection({
      initialSelectedItems: defaultSelectedItems,
    });

  const selectState = useSelect({
    selectedItem: null,
    items,
    stateReducer: (_state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
      }
      return changes;
    },
    onStateChange: (changes) => {
      const { type, selectedItem } = changes;

      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.ToggleButtonBlur:
          if (selectedItem) {
            if (selectedItems?.find((selected) => selected?.value === selectedItem?.value)) {
              removeSelectedItem(selectedItem);
            } else {
              addSelectedItem(selectedItem);
            }

            onChange && onChange(selectedItem);
          }

          break;
        default:
          break;
      }
    },
  });

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    toggleMenu,
    openMenu,
    closeMenu,
  } = selectState;

  return (
    <div data-theme="white" className={twMerge('text-indigo-100', className)}>
      {label && (
        <Text as="label" {...getLabelProps()}>
          {label}
        </Text>
      )}
      <div className="relative">
        <button
          type="button"
          className={cn(
            'body-sm border-indigo-100 inline-flex h-[56px] w-full items-center justify-between gap-[5px] rounded-[8px] border-[1px] bg-white px-[15px] py-2',
            {
              'rounded-bl-none rounded-br-none': isOpen,
            }
          )}
          onClick={toggleMenu}
          {...getToggleButtonProps(
            getDropdownProps({
              onKeyDown: (event) => {
                if (event.key === 'Escape') {
                  closeMenu();
                }
              },
            })
          )}
        >
          <Flex gap="2" className="overflow-hidden">
            {selectedItems?.length > 0
              ? selectedItems.map((selectedItem, index) => {
                  return (
                    <span
                      className="shrink-0 rounded-[8px] bg-gray-50 px-2 py-1"
                      key={`selected-item-${index}`}
                    >
                      {selectedItem.label}
                    </span>
                  );
                })
              : placeholder}
          </Flex>
          <Icon
            className={cn('justify-self-end transition-all', { 'rotate-180': isOpen })}
            iconName={IconName.CHEVRON_DOWN}
            isAriaHidden={true}
          />
        </button>

        <ul
          className={cn(
            'rounded-md border-indigo-100 absolute z-10 w-full overflow-hidden rounded-b-[8px] border-[1px] border-t-0 bg-white',
            { hidden: !(isOpen && items?.length) }
          )}
          {...getMenuProps()}
        >
          {isOpen &&
            items?.map((item: SelectItem, index) => (
              <li
                key={index}
                className={cn('body-sm cursor-pointer px-[15px] py-[10px]', {
                  'bg-gray-20': highlightedIndex === index || item.value === selectedItem?.value,
                })}
                {...getItemProps({ index, item })}
              >
                <Checkbox
                  value={item?.value}
                  label={item?.label}
                  isChecked={
                    selectedItems?.find((selected) => selected?.value === item?.value)
                      ? true
                      : false
                  }
                  onChange={() => setTimeout(() => openMenu())}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
