import React, { createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export const NavigateContext = createContext(null);

export const NavigateProvider = ({ children }) => {
    const navigate = useNavigate();


    const handleNavigate = (route, buttonId) => {
        navigate(route, { replace: false });
        localStorage.setItem('activeButton', buttonId);
        window.scrollTo(0, 0);
    };

    const handleNavigateOtherPages = (route, buttonId) => {
        navigate(route, { replace: false });
        localStorage.setItem('activeButton', buttonId);
        window.scrollTo(0, 0);
    };

    const typeButtonClick = (type, route) => {
        handleNavigate(route, route)
    }

    useEffect(() => {
        return () => {
            localStorage.removeItem('activeButton');
        };
    }, []);

    return (
        <NavigateContext.Provider value={{ handleNavigate,  handleNavigateOtherPages, typeButtonClick  }}>
            {children}
        </NavigateContext.Provider>
    );
};
