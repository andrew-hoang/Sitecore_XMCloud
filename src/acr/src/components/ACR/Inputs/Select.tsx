import { InputsProps } from './Inputs.props';

import { Text } from '@radix-ui/themes';
import Icon from '../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import { useSelect } from 'downshift';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

export type SelectItem = { value: string; label: string };

type DropdropProps = InputsProps & {
  items: SelectItem[];
  value?: SelectItem | null;
  defaultSelectedItem?: SelectItem;
  placeholder: string;
  onChange?: (selectedItem: SelectItem | null) => void;
};

const Dropdown = (props: DropdropProps) => {
  const { label, items, value, placeholder, className, defaultSelectedItem, onChange, disabled } =
    props;

  const selectState = useSelect({
    items,
    defaultSelectedItem,
    selectedItem: value,
    onSelectedItemChange: (changes) => {
      onChange && changes.selectedItem !== undefined && onChange(changes.selectedItem);
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
    closeMenu,
  } = selectState;

  return (
    <div className={twMerge('text-indigo-100', className)}>
      {label && (
        <Text as="label" {...getLabelProps()}>
          {label}
        </Text>
      )}
      <div className="relative">
        <button
          type="button"
          className={cn(
            'body-sm inline-flex h-[56px] w-full items-center justify-between gap-[5px] rounded-[8px] border-[1px] border-indigo-100 bg-white px-[15px]',
            {
              'rounded-bl-none rounded-br-none': isOpen,
            },
            { 'border-gray-100 bg-gray-20 text-gray-100': disabled }
          )}
          onClick={toggleMenu}
          {...getToggleButtonProps({
            disabled,
            'aria-label': selectedItem?.label || placeholder,
            onKeyDown: (event) => {
              if (event.key === 'Escape') {
                closeMenu();
              }
            },
          })}
        >
          <span>{selectedItem?.label ?? placeholder}</span>
          <Icon
            className={cn('justify-self-end transition-all', { 'rotate-180': isOpen })}
            iconName={IconName.CHEVRON_DOWN}
            isAriaHidden={true}
          />
        </button>
        <ul
          className={cn(
            'rounded-md absolute z-10 w-full overflow-hidden rounded-b-[8px]  border-[1px] border-t-0 border-indigo-100 bg-white',
            { hidden: !(isOpen && items?.length) }
          )}
          {...getMenuProps()}
        >
          {isOpen &&
            items?.map((item: SelectItem, index) => (
              <li
                key={`select-item_${index}`}
                className={cn('body-sm cursor-pointer px-[15px] py-[10px]', {
                  'bg-gray-20': highlightedIndex === index || item.value === selectedItem?.value,
                })}
                {...getItemProps({ index, item })}
              >
                {item?.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
