import { TextField } from '@radix-ui/themes';

import { InputsProps } from './Inputs.props';

import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

type InputProps = InputsProps & {
  placeholder?: string;
  slot?: JSX.Element;
  type?:
    | 'number'
    | 'search'
    | 'time'
    | 'text'
    | 'hidden'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'tel'
    | 'url'
    | 'week';
};

const Input = (props: InputProps) => {
  const { type = 'text', label, placeholder, className, slot, disabled } = props;

  return (
    <label className="flex flex-col gap-2 font-medium">
      {label}
      <TextField.Root
        size="3"
        type={type}
        radius="large"
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge(
          cn(
            'body-sm group h-[56px] bg-white shadow-[inset_0_0_0_1px] shadow-indigo-100 outline-none [&>input]:px-4',
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
