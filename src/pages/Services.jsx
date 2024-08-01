import React, {useState} from 'react'

export default function Services() {

    const [categories, setCategories] = useState([
        { id: 1, text: 'Парихмахерские услуги' },
        { id: 2, text: 'Ресницы' },
        { id: 3, text: 'Барбершоп' },
        { id: 4, text: 'Косметология, уход' },
        { id: 5, text: 'Татуаж, тату' },
        { id: 6, text: 'Ногтевой сервис' },
        { id: 7, text: 'Депиляция, эпиляция' },
        { id: 8, text: 'Брови' },
        { id: 9, text: 'Визаж' },
        { id: 10, text: 'Усы, борода' },
      ]);
    
      const [cards, setCards] = useState([
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },
        {
            img: null,
            name:  "Название",
            address: "Адрес",
            rating: "5.0",
            ratingCount: "1",
        },

      ])
      const [indexOfLastItem, setIndexOfLastItem] = useState(12)
      const currentCards = cards.slice(0, indexOfLastItem);

      const [clickedIndexes, setClickedIndexes] = useState([]);

      const handleHeartClick = (index) => {
        if (clickedIndexes.includes(index)) {
          setClickedIndexes(clickedIndexes.filter((i) => i !== index));
        } else {
          setClickedIndexes([...clickedIndexes, index]);
        }
      };
  
      return (
        <>
          <div className="breadCrambs">
            <a href="" className="breadCrambs__link">Главная</a>
            <span className="breadCrambs__span">&gt;</span>
            <a href="" className="breadCrambs__link">Услуги</a>
          </div>
          <section className="categories">
            <h2 className="categories__title">Категории</h2>
            <div className="categories__items">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`categories__item`}
                >
                  <span className="categories__text">{category.text}</span>
                </div>
              ))}
            </div>
          </section>
        <section className='catalog'>
            <h2 className="catalog__title">Каталог</h2>
        <div className="service__container">
            {currentCards.map((item, index) => 
                <article className='service' key={index}>
                    <div className="service__likeIcon-box">
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
                    <div className="service__content">
                        <img src="" alt="" className="service__img" />
                        <div className="service__text">
                            <h3 className="service__title">{item.name}</h3>
                            <span className="service__address">{item.address}</span>
                        </div>
                    </div>
                    <div className="service__bottom">
                        <span className="service__rating">{item.rating}({item.ratingCount})</span>
                        <button className="service__button">Записаться</button>
                    </div>
                </article>
            )}    
        </div>
        <button 
            className="catalog__button"
            onClick={() => setIndexOfLastItem((prev) => prev + 6)}
        >
                Показать еще
        </button>
        </section>
        <section className='placeServices'>
            <div className="placeServices__content">
                <h3 className="placeServices__title"> Хотите размещать <br /> свои услуги в Good Day</h3>
                <p className="placeServices__text">Good Day обеспечивает вам надёжную <br /> онлайн-запись, автоматизацию и <br /> продвижение</p>
                <button className="placeServices__button">Подробнее о Good Day</button>
            </div>
            <img src="" alt="" className="placeServices__img" />
        </section>
    </>
  )
}
