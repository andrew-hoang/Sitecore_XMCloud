import { TextField } from '@radix-ui/themes';

import { InputsProps } from './Inputs.props';

import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

type InputProps = InputsProps & {
  placeholder?: string;
  slot?: JSX.Element;
};

const Input = (props: InputProps) => {
  const { label, placeholder, className, slot, disabled } = props;

  return (
    <label className="flex flex-col gap-2 font-medium">
      {label}
      <TextField.Root
        size="3"
        radius="large"
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge(
          cn(
            'body-sm shadow-indigo-100 group h-[56px] bg-white shadow-[inset_0_0_0_1px] outline-none [&>input]:px-4',
            className,
            { 'bg-gray-20': disabled }
          )
        )}
      >
        <TextField.Slot
          side="right"
          className={cn('text-black', {
            'text-gray-70': disabled,
          })}
          pr="5"
        >
          {slot}
        </TextField.Slot>
      </TextField.Root>
    </label>
  );
};

export default Input;
