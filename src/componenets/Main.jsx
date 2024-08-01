import React, {useState, useEffect} from 'react'
import { Outlet} from 'react-router-dom';
import '../styles/style.scss'
import Header from './main/Header';
import Footer from './main/Footer';
import { useNavigate} from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  
  const getInitialButton = () => {
    const savedButton = localStorage.getItem('activeButton');
    return savedButton ? savedButton : 'discounts';
  };

  const [activeButton, setActiveButton] = useState(getInitialButton);

  const handleButtonClick = (route, buttonId) => {
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
    <>
    <Header handleButtonClick={handleButtonClick} activeButton={activeButton}/>
    <main className="container">
      <div className='main'>
        <Outlet />
      </div>
    </main>
    <Footer handleButtonClick={handleButtonClick}/>
    </>
  )
}
