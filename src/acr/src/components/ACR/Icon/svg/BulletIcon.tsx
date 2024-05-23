import { SvgProps, sharedAttributes } from '../Icon.props';

const BulletIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="10"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M0 0H15C17.7614 0 20 2.23858 20 5C20 7.76142 17.7614 10 15 10H0V0Z"
      />
    </svg>
  );
};

export default BulletIcon;
