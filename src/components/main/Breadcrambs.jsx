import React from 'react'
import { useNavigate} from 'react-router-dom';

export default function Breadcrambs() {
    const navigate = useNavigate();

    const handleNavigateToDiscounts = () => {
        navigate('/discounts', { replace: true });
    };
    
  return (
     <div className="breadCrambs">
        <a onClick={handleNavigateToDiscounts} className="breadCrambs__link">Главная</a>
        <span className="breadCrambs__span">&gt;</span>
        <a href="" className="breadCrambs__link">Развлечения</a>
    </div>

  )
}
