import { SvgProps, sharedAttributes } from '../Icon.props';

const CloseIcon = (props: SvgProps): JSX.Element => {
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
        d="M1.8 11.25.75 10.2 4.95 6 .75 1.8 1.8.75 6 4.95l4.2-4.2 1.05 1.05L7.05 6l4.2 4.2-1.05 1.05L6 7.05l-4.2 4.2Z"
      />
    </svg>
  );
};

export default CloseIcon;
