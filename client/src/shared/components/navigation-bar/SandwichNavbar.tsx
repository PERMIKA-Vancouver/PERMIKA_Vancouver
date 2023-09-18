import { useState } from 'react';
import SandwichLogo from './SandwichLogo';
import { MenuInterface } from './MenuInterface';

export const SandwichNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="mr-[10%] relative">
      <SandwichLogo
        isOpen={isOpen}
        openHandler={handleOpen}
        closeHandler={handleClose}
      />
      {isOpen && <MenuInterface />}
    </div>
  );
};
