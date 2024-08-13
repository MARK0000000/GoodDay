import React from 'react'
import { useNavigate} from 'react-router-dom';

export default function Breadcrambs({current, prev, prevLink}) {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(`${path}`, { replace: true });
    };
    
  return (
     <div className="breadCrambs">
        <a onClick={() => handleNavigate("../discounts")} className="breadCrambs__link">Главная</a>
        {prev &&
        <>
          <span className="breadCrambs__span">&gt;</span>
          <a onClick={() => handleNavigate(prevLink)}  className="breadCrambs__link">{prev}</a>
        </>
        }
        <span className="breadCrambs__span">&gt;</span>
        <a className="breadCrambs__link">{current}</a>
    </div>

  )
}
