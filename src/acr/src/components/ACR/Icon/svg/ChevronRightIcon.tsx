import { SvgProps, sharedAttributes } from '../Icon.props';

const ChevronRightIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 13"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="m5.1 6.06494-4.6-4.6L1.9.0649414l6 5.9999986-6 5.99996-1.4-1.4 4.6-4.59996Z"
      />
    </svg>
  );
};

export default ChevronRightIcon;
