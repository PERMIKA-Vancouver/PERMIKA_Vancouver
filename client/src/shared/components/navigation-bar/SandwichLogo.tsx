type propsType = {
  isOpen: boolean;
  openHandler: () => void;
  closeHandler: () => void;
};

const sandwichStyle =
  'w-[0.75rem] h-[2px] mt-[3px] mb-[3px] block duration-500 bg-[#BAB8B8]';

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
          className={`${sandwichStyle} menu-line-1 rounded-l-sm origin-[right_center] ${
            isOpen && 'translate-y-[0.49rem] rotate-45'
          }`}
        ></span>
        <span
          className={`${sandwichStyle} menu-line-2 rounded-l-sm origin-[right_center] ${
            isOpen && 'scale-0'
          }`}
        ></span>
        <span
          className={`${sandwichStyle} menu-line-3 rounded-l-sm origin-[right_center] ${
            isOpen && '-translate-y-[0.49rem] -rotate-45'
          }`}
        ></span>
        <span
          className={`${sandwichStyle} menu-line-4 rounded-r-sm origin-[left_center] ${
            isOpen && 'translate-y-[0.49rem] -rotate-45'
          }`}
        ></span>
        <span
          className={`${sandwichStyle} menu-line-5 rounded-r-sm origin-[left_center] ${
            isOpen && 'scale-0'
          }`}
        ></span>
        <span
          className={`${sandwichStyle} menu-line-6 rounded-r-sm origin-[left_center] ${
            isOpen && '-translate-y-[0.49rem] rotate-45'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default MenuLogo;
