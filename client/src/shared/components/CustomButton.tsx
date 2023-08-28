export const CustomButton = ({
  text,
  className,
  link,
}: {
  text: string;
  className: string;
  link: string;
}) => {
  const clickHandler = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`bg-sunset-orange w-[12.875rem] h-[2.1875rem] rounded-[0.1875rem] hover:bg-[#A86108] transition-colors ease-out duration-300 ${className} flex items-center justify-center`}
      onClick={clickHandler}
    >
      <span className="text-white button-text">{text}</span>
    </div>
  );
};
