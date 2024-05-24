import { useState } from 'react';

import { IconName } from 'src/enumerations/Icon.enum';

import Icon from '../Icon/Icon';
import InputField from './Input';
import RadioButton from './Radio';
import CheckboxItem from './Checkbox';
import SelectDropdown from './Select';
import MultiSelectDropdown, { SelectItem } from './MultiSelect';

export default {
  title: 'Base/Inputs',
};

export const Input = {
  render: () => (
    <InputField
      placeholder="Search"
      slot={
        <button type="button" aria-label="Submit">
          <Icon
            iconName={IconName.RIGHT_ARROW_CIRCLE}
            className="b-t-body h-6 w-6 group-focus-within:fill-green-100 group-focus-within:[&>circle]:stroke-none"
          />
        </button>
      }
    />
  ),
};

export const Radio = {
  render: () => (
    <>
      <RadioButton name="field" value="1" label="Option 1" />
      <RadioButton name="field" value="2" label="Option 2" />
      <RadioButton name="field" value="3" label="Option 3" />
    </>
  ),
};

export const Checkbox = {
  render: () => (
    <>
      <CheckboxItem name="field_1" value="1" label="Option 1" />
      <CheckboxItem name="field_2" value="2" label="Option 2" />
      <CheckboxItem name="field_3" value="3" label="Option 3" />
    </>
  ),
};

export const Select = {
  render: () => {
    const items = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    return <SelectDropdown placeholder="Select item..." items={items} />;
  },
};

// TODO need to fix the `useState` linter error
export const MultiSelect = () => {
  const items = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const [selectedItems, setItems] = useState<{ value: string; label: string }[]>([]);

  return (
    <MultiSelectDropdown
      placeholder="Select items..."
      items={items}
      selectedItems={selectedItems}
      onChange={(selected: SelectItem[]) => setItems(selected)}
    />
  );
};
