import { SvgProps, sharedAttributes } from "../Icon.props"
import cn from "classnames";

const TwitterX = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}
      {...sharedAttributes(props)}>
      <path
        d="M8.677 10.2949L13.867 7.29492L8.677 4.29492V10.2949ZM20.237 2.46492C20.367 2.93492 20.457 3.56492 20.517 4.36492C20.587 5.16492 20.617 5.85492 20.617 6.45492L20.677 7.29492C20.677 9.48492 20.517 11.0949 20.237 12.1249C19.987 13.0249 19.407 13.6049 18.507 13.8549C18.037 13.9849 17.177 14.0749 15.857 14.1349C14.557 14.2049 13.367 14.2349 12.267 14.2349L10.677 14.2949C6.487 14.2949 3.877 14.1349 2.847 13.8549C1.947 13.6049 1.367 13.0249 1.117 12.1249C0.987002 11.6549 0.897002 11.0249 0.837002 10.2249C0.767002 9.42492 0.737002 8.73492 0.737002 8.13492L0.677002 7.29492C0.677002 5.10492 0.837002 3.49492 1.117 2.46492C1.367 1.56492 1.947 0.984922 2.847 0.734922C3.317 0.604922 4.177 0.514922 5.497 0.454922C6.797 0.384922 7.987 0.354922 9.087 0.354922L10.677 0.294922C14.867 0.294922 17.477 0.454922 18.507 0.734922C19.407 0.984922 19.987 1.56492 20.237 2.46492Z"
        fill="currentColor" />
    </svg>
  );
};

export default TwitterX;