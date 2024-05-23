import { SvgProps, sharedAttributes } from '../Icon.props';

const LeftArrowCircleIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...sharedAttributes(props)}
    >
      <circle cx="15" cy="15" r="14.5" stroke="currentColor" />
      <path
        d="M11.8688 15.75L16.0688 19.95L15 21L9 15L15 9L16.0688 10.05L11.8688 14.25H21V15.75H11.8688Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LeftArrowCircleIcon;
