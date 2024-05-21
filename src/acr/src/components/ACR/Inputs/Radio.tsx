import { Flex, Text, Radio as RxRadio } from '@radix-ui/themes';
import { InputsProps } from './Inputs.props';

import { twMerge } from 'tailwind-merge';

type RadioProps = InputsProps & {
  defaultChecked?: boolean;
  value: string;
};

const Radio = (props: RadioProps) => {
  const { name, value, label, className, defaultChecked, onChange } = props;

  return (
    <Flex asChild gap="2" align="center" className={twMerge('body-sm cursor-pointer', className)}>
      <Text as="label" size="2">
        <RxRadio
          name={name}
          value={value}
          size="1"
          defaultChecked={defaultChecked}
          className="before:border before:border-t-body before:bg-transparent after:scale-50 after:bg-transparent before:checked:border-t-input after:checked:bg-t-input"
          onChange={onChange}
        />
        {label}
      </Text>
    </Flex>
  );
};

export default Radio;
