import { useEffect, useRef, useState } from 'react';
import SandwichLogo from './SandwichLogo';
import { MenuInterface } from './MenuInterface';
import { useLocation } from 'react-router-dom';

export const SandwichNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  useEffect(() => {
    handleClose();
  }, [location.pathname]);

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
