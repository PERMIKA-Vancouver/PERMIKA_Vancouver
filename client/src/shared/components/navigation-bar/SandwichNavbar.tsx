import { useRef, useState } from 'react';
import SandwichLogo from './SandwichLogo';
import { MenuInterface } from './MenuInterface';

export const SandwichNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (e: any) => {
    if (isOpen && !menuRef.current?.contains(e.target as Node)) {
      handleClose();
    }
  };

  window.addEventListener('click', handleClickOutside);

  return (
    <div className="mr-[10%] relative" ref={menuRef}>
      <SandwichLogo
        isOpen={isOpen}
        openHandler={handleOpen}
        closeHandler={handleClose}
      />
      <MenuInterface isOpen={isOpen} />
    </div>
  );
};
