import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeOfDataContext } from './TypeOfData';
export const NavigateContext = createContext(null);

export const NavigateProvider = ({ children }) => {
    const navigate = useNavigate();
    const {changeType} = useContext(TypeOfDataContext)
    const getInitialButton = () => {
        const savedButton = localStorage.getItem('activeButton');
        return savedButton ? savedButton : 'posters';
    };

    const [activeButton, setActiveButton] = useState(getInitialButton);

    const handleNavigate = (route, buttonId) => {
        navigate(route, { replace: false });
        setActiveButton(buttonId);
        localStorage.setItem('activeButton', buttonId);
        window.scrollTo(0, 0);
    };

    const handleNavigateOtherPages = (route, buttonId) => {
        navigate(route, { replace: false });
        setActiveButton(buttonId);
        localStorage.setItem('activeButton', buttonId);
        window.scrollTo(0, 0);
        changeType('')
    };

    const typeButtonClick = (type, route) => {
        changeType(type)
        handleNavigate(route, route)
    }

    useEffect(() => {
        return () => {
            localStorage.removeItem('activeButton');
        };
    }, []);

    return (
        <NavigateContext.Provider value={{ handleNavigate, activeButton, handleNavigateOtherPages, typeButtonClick  }}>
            {children}
        </NavigateContext.Provider>
    );
};
