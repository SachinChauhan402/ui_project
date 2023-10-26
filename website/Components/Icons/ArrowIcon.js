export const ArrowIcon = ({className,height,width}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${height?height:'h-6'} ${width?width:'w-6'} ${className?className:'mt-1 ml-3'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};
