const Skeleton = ({ className = "" }) => {
    return (
      <div
        className={`animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 ${className}`}
      />
    );
  };
  
  export default Skeleton;  