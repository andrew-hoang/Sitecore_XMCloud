import { SvgProps, sharedAttributes } from "../Icon.props"
import cn from "classnames";

const TwitterX = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)} {...sharedAttributes(props)}>
      <path d="M11.3898 7.91757L18.0863 0.294922H16.5L10.683 6.91221L6.04051 0.294922H0.68457L7.70652 10.3024L0.68457 18.2949H2.27085L8.40973 11.3053L13.3136 18.2949H18.6696M2.84337 1.46635H5.28034L16.4988 17.1811H14.0612" fill="currentColor" />
    </svg>
  );
};

export default TwitterX;
