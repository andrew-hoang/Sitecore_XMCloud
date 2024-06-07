import { SvgProps, sharedAttributes } from '../Icon.props';

const MenuIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 13"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M.862305 12.9523v-2H18.8623v2H.862305Zm0-5.00003v-2H18.8623v2H.862305Zm0-5V.952271H18.8623V2.95227H.862305Z"
      />
    </svg>
  );
};

export default MenuIcon;
