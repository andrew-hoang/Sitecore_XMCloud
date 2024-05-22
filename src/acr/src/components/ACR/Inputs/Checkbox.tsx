import { Flex, Text } from '@radix-ui/themes';
import { InputsProps } from './Inputs.props';

type CheckboxProps = InputsProps & {
  name?: string;
  isChecked?: boolean;
  className?: string;
  disabled?: boolean;
};

const Checkbox = (props: CheckboxProps) => {
  const { name, value, label, className, isChecked, onChange } = props;

  return (
    <Flex gap="2" align="center" className={className}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="shadow-current relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-none shadow-[inset_0_0_0_1px] before:absolute before:left-[6px] before:top-[2px] before:h-[11px] before:w-[6px] before:rotate-45 before:border-b-2 before:border-r-2 before:border-b-transparent before:border-r-transparent checked:bg-t-input checked:shadow-t-input checked:before:border-t-background"
      />
      <Text as="label" htmlFor={name} className="body-sm cursor-pointer">
        {label}
      </Text>
    </Flex>
  );
};

export default Checkbox;
