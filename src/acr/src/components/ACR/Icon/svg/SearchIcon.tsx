import { SvgProps, sharedAttributes } from '../Icon.props';

const SearchIcon = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
      {...sharedAttributes(props)}
    >
      <path
        fill="currentColor"
        d="M9.625 8.5h-.5925l-.21-.2025C9.5575 7.4425 10 6.3325 10 5.125 10 2.4325 7.8175.25 5.125.25S.25 2.4325.25 5.125 2.4325 10 5.125 10c1.2075 0 2.3175-.4425 3.1725-1.1775l.2025.21v.5925l3.75 3.7425 1.1175-1.1175L9.625 8.5Zm-4.5 0C3.2575 8.5 1.75 6.9925 1.75 5.125S3.2575 1.75 5.125 1.75 8.5 3.2575 8.5 5.125 6.9925 8.5 5.125 8.5Z"
      />
    </svg>
  );
};

export default SearchIcon;
