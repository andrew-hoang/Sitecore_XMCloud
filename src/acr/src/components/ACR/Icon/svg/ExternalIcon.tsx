import { SvgProps, sharedAttributes } from '../Icon.props';

const ExternalIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 19"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M.75 18.9553V.955322h9V2.95532h-7V16.9553h14V9.95532h2v8.99998h-18Zm6.7-5.3-1.4-1.4 9.3-9.29998h-3.6V.955322h7V7.95532h-2v-3.6l-9.3 9.29998Z"
      />
    </svg>
  );
};

export default ExternalIcon;

