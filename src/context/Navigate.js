import React, { createContext, useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export const NavigateContext = createContext(null);

export const NavigateProvider = ({ children }) => {
    const navigate = useNavigate();
  
    const getInitialButton = () => {
      const savedButton = localStorage.getItem('activeButton');
      return savedButton ? savedButton : 'discounts';
    };
  
    const [activeButton, setActiveButton] = useState(getInitialButton);
  
    const handleNavigate = (route, buttonId) => {
      navigate(route, { replace: false });
      setActiveButton(buttonId);
      localStorage.setItem('activeButton', buttonId);
    };
  
    useEffect(() => {
      return () => {
        localStorage.removeItem('activeButton');
      };
    }, []);
  
  return (
    <NavigateContext.Provider value={{ handleNavigate, activeButton}}>
      {children}
    </NavigateContext.Provider>
  );
};
