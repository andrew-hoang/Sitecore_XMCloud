import { SvgProps, sharedAttributes } from '../Icon.props';

const RightArrowIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 13 12"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M9.92227 6.75H.791016v-1.5H9.92227l-4.2-4.2L6.79102 0 12.791 6l-5.99998 6-1.06875-1.05 4.2-4.2Z"
      />
    </svg>
  );
};

export default RightArrowIcon;

