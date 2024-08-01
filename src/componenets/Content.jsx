import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import exampleImg from '../images/other/4k.jpg'
import { fetchGet, fetchPost } from '../api/fetch';
export default function Content({businesses}) {

    const navigate = useNavigate();

    const [cards, setCards] = useState([
        {
            id: 1,
            stock: "-10%",
            img: exampleImg,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 2,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 3,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 4,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 5,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 6,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 7,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 8,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 9,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 10,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 11,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
        {
            id: 12,
            stock: "-10%",
            img: null,
            likeActive: false,
            title: "Название компании",  
            validUntil: "по 6 фвгуста",
            description: "Краткое описание Краткое описание Краткое описание Краткое описание",
            address: "",
            status: "Закрыто",
            buyCount: 6,
            commntsCount: 0,
        },
    ])


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,] = useState(9);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

    const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
    const [indexOfLastPage, setIndexOfLastPage] = useState(30);

    let pageNumbers = [];
    for (let i = 1; i <= 60; i++) {
        pageNumbers.push(i);
    }
    const [currentPageNumbers, setCurrentPageNumbers] = useState(pageNumbers.slice(indexOfFirstPage, indexOfLastPage)) 

    const handlePrevPage = () => {
        if (indexOfFirstPage > 0) {
          setIndexOfFirstPage(indexOfFirstPage - 10);
          setIndexOfLastPage(indexOfLastPage - 10);
          setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage - 10, indexOfLastPage -10))
          //setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (indexOfLastPage < 60) {
          setIndexOfFirstPage(indexOfFirstPage + 10);
          setIndexOfLastPage(indexOfLastPage + 10);
          setCurrentPageNumbers(pageNumbers.slice(indexOfFirstPage + 10, indexOfLastPage + 10))
          //setCurrentPage(currentPage + 1);
        }
      };

    const [clickedIndexes, setClickedIndexes] = useState([]);

    const handleHeartClick = (index) => {
      if (clickedIndexes.includes(index)) {
        setClickedIndexes(clickedIndexes.filter((i) => i !== index));
      } else {
        setClickedIndexes([...clickedIndexes, index]);
      }
    };

  return (
    <div>
        <div className='content__container'>
            {currentItems.map((item, index) => 
                <article key={index} className="card">
                    <div className="card__img-box">
                        <span className='card__stock'>{item.stock}</span>
                        <img src={item.img} alt="" className="card__img" />
                        <div className="card__likeIcon-box">
                            <svg
                                style={{cursor: 'pointer'}}
                                key={item.id}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="heart-icon"
                                onClick={() => handleHeartClick(index)}
                                >
                                <path
                                    d="M16.6875 3.75C14.7516 3.75 13.0566 4.5825 12 5.98969C10.9434 4.5825 9.24844 3.75 7.3125 3.75C5.77146 3.75174 4.29404 4.36468 3.20436 5.45436C2.11468 6.54404 1.50174 8.02146 1.5 9.5625C1.5 16.125 11.2303 21.4369 11.6447 21.6562C11.7539 21.715 11.876 21.7458 12 21.7458C12.124 21.7458 12.2461 21.715 12.3553 21.6562C12.7697 21.4369 22.5 16.125 22.5 9.5625C22.4983 8.02146 21.8853 6.54404 20.7956 5.45436C19.706 4.36468 18.2285 3.75174 16.6875 3.75Z"
                                    stroke="#959595" strokeWidth="1.5"
                                    fill={clickedIndexes.includes(index) ? '#959595' : 'white'}
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title">{item.title}</h3>
                        <div className="card__text-box">
                            <span className="card__text card__text_gray">Действует: </span>
                            <span className="card__text">{item.validUntil}</span>
                        </div>
                        <p className="card__text card__text_p">{item.description}</p>
                        <div className="card__text-box card__text-box_vertical">
                            <span className="card__text">Адрес {item.address}</span>
                            <span className="card__text">{item.status}</span>
                        </div>
                    </div>
                    <hr className='card__hr' />
                    <div className="card__bottom">
                        <div>
                            <span className="card__text_bottom card__text_bottom_paid">{item.buyCount}</span>
                            <span className="card__text_bottom card__text_bottom_comments">{item.commntsCount}</span>
                        </div>
                        <button className="card__button" onClick={() => navigate(`${item.id}`, { replace: false })}>Посмотреть</button>
                    </div>
                </article>
            )}
        </div>
        <ul className='pagination__container'>
            <li 
                className={`pagination__item pagination__item_prev ${indexOfFirstPage === 0 ? 'pagination__item_disabled' : ''}`}
                onClick={handlePrevPage}
                >
                &lt;&lt;
            </li>
            {currentPageNumbers.length > 1 &&
                currentPageNumbers.map(number => (
                    <li key={number} onClick={() => setCurrentPage(number)} className={`pagination__item ${number == currentPage ? "pagination__item_active" : ""}`}>
                        {number}
                    </li>
                ))
            }
            <li 
                className={`pagination__item pagination__item_next ${indexOfLastPage >= 60 ? 'pagination__item_disabled' : ''}`}
                onClick={handleNextPage}
                >
                &gt;&gt;
            </li>
        </ul>
    </div>
  )
}
