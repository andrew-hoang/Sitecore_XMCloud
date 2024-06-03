import { SvgProps, sharedAttributes } from "../Icon.props"
import cn from "classnames";

const Facebook = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)} {...sharedAttributes(props)}>
      <path d="M10.677 0.334961C5.177 0.334961 0.677002 4.82496 0.677002 10.355C0.677002 15.355 4.337 19.505 9.117 20.255V13.255H6.577V10.355H9.117V8.14496C9.117 5.63496 10.607 4.25496 12.897 4.25496C13.987 4.25496 15.127 4.44496 15.127 4.44496V6.91496H13.867C12.627 6.91496 12.237 7.68496 12.237 8.47496V10.355H15.017L14.567 13.255H12.237V20.255C14.5934 19.8828 16.7392 18.6805 18.2869 16.865C19.8347 15.0496 20.6824 12.7406 20.677 10.355C20.677 4.82496 16.177 0.334961 10.677 0.334961Z" fill="currentColor" />
    </svg>
  );
};

export default Facebook;

