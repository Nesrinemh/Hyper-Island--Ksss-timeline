import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={handleClick}
      className='flex flex-col justify-center items-center'
    >
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
      ></span>
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5`}
      ></span>
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
      ></span>
    </button>
  );
}

export default HamburgerMenu;
