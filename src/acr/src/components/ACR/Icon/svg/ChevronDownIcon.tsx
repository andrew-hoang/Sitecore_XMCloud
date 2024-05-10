import { SvgProps, sharedAttributes } from '../Icon.props';

const ChevronDownIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 13 9"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="m6.5 8.37498-6-6L1.9.974976 6.5 5.57498 11.1.974976l1.4 1.400004-6 6Z"
      />
    </svg>
  );
};

export default ChevronDownIcon;

