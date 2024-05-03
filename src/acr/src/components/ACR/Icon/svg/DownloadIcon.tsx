import { SvgProps, sharedAttributes } from '../Icon.props';

const DownloadIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 12"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M6 9 2.25 5.25 3.3 4.1625l1.95 1.95V0h1.5v6.1125l1.95-1.95L9.75 5.25 6 9Zm-6 3V8.25h1.5v2.25h9V8.25H12V12H0Z"
      />
    </svg>
  );
};

export default DownloadIcon;

