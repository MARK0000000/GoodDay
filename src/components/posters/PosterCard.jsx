import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigateContext } from '../../context/Navigate';
import useEndpoints from '../../api/apiConfig';

export default function PosterCard({ data }) {
  const endpoints = useEndpoints();
  const location = useLocation();
  
  const endpoint = location.pathname; 
  
  const { handleNavigate } = useContext(NavigateContext);
  
  return (
    <article className='posterCard' onClick={() => handleNavigate(`${endpoint}/${data.idPoster}`, `${endpoint}/${data.idPoster}`)} >
        <img 
            src={endpoints.UPLOADS + data.preview.url} 
            alt="" 
            className="posterCard__img" 
        />
        <h3 className="posterCard__title">{data.posterName}</h3>
        <p className="posterCard__categories">
            {data.categories.map((item, index) => 
                <span key={index} className="posterCard__category">{item.categoryName}</span>
            )}
        </p>
        <p className="posterCard__price">{data.price}</p>
    </article>
  );
}