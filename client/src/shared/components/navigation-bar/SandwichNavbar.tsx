import { useState } from 'react';
import SandwichLogo from './SandwichLogo';

export const SandwichNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="mr-[10%]">
      <SandwichLogo
        isOpen={isOpen}
        openHandler={handleOpen}
        closeHandler={handleClose}
      />
    </div>
  );
};
