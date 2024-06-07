import { SvgProps, sharedAttributes } from '../Icon.props';

const ChevronLeftIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 7 10"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M5.07227 9.5.572266 5 5.07227.5l1.05 1.05-3.45 3.45 3.45 3.45-1.05 1.05Z"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
