import { SvgProps, sharedAttributes } from '../Icon.props';

const RightArrowCircleIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      className={className}
      {...sharedAttributes(props)}
    >
      <circle cx="15" cy="15" r="14.5" stroke="currentColor" />
      <path
        fill="currentColor"
        d="M18.1313 15.75H9v-1.5h9.1313l-4.2-4.2L15 9l6 6-6 6-1.0687-1.05 4.2-4.2Z"
      />
    </svg>
  );
};

export default RightArrowCircleIcon;
