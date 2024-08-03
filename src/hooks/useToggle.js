import { useState } from 'react';

// Custom hook for toggle behavior
const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Toggle function to switch between open and closed states
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggle];
};

export default useToggle;
