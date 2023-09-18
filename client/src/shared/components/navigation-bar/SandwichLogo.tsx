type propsType = {
  isOpen: boolean;
  openHandler: () => void;
  closeHandler: () => void;
};

const MenuLogo = ({ isOpen, openHandler, closeHandler }: propsType) => {
  return (
    <div
      className="w-6 h-6 relative"
      onClick={isOpen ? closeHandler : openHandler}
    >
      <div
        className={`w-full h-full flex flex-col flex-wrap items-center content-center`}
      >
        <span
          className={`menu-line-1 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-[#BAB8B8] ${
            isOpen && 'translate-y-[0.49rem] rotate-45'
          }`}
        ></span>
        <span
          className={`menu-line-2 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-[#BAB8B8] ${
            isOpen && 'scale-0'
          }`}
        ></span>
        <span
          className={`menu-line-3 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-[#BAB8B8] ${
            isOpen && '-translate-y-[0.49rem] -rotate-45'
          }`}
        ></span>
        <span
          className={`menu-line-4 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-[#BAB8B8] ${
            isOpen && 'translate-y-[0.49rem] -rotate-45'
          }`}
        ></span>
        <span
          className={`menu-line-5 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-[#BAB8B8] ${
            isOpen && 'scale-0'
          }`}
        ></span>
        <span
          className={`menu-line-6 w-[0.75rem] h-[1.5px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-[#BAB8B8] ${
            isOpen && '-translate-y-[0.49rem] rotate-45'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default MenuLogo;
