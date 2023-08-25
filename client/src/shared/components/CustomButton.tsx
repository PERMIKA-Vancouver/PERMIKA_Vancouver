export const CustomButton = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <div
      className={`bg-sunset-orange w-[12.875rem] h-[2.1875rem] rounded-[0.1875rem] hover:bg-[#A86108] transition-colors ease-out duration-300 ${className} flex items-center justify-center`}
    >
      <span className="text-white button-text">{text}</span>
    </div>
  );
};
