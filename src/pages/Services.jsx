import React, {useEffect, useState, useContext} from 'react'
import ContentServices from '../components/services/ContentServices'
import Breadcrambs from '../components/main/Breadcrambs'
import { fetchGet } from '../api/fetch'
import endpoints from '../api/apiConfig'
import PlaceServices from '../components/services/PlaceServices'
import Categories from '../components/services/Categories'

export default function Services() {
    const [cards, setCards] = useState([
    {   
        id: 1,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 2,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 3,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 4,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 5,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 6,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 7,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 8,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 9,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 10,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 11,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 12,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 13,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 14,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 15,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },
    {   
        id: 16,
        img: null,
        name:  "Название",
        address: "Адрес",
        rating: "5.0",
        ratingCount: "1",
    },

    ])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchGet(endpoints.SERVICEBUSINESS);
          if (data) {
            setCards(data);
            setIsLoading(false);
            console.log(data);
          }
        };
        fetchData();
      }, []);    

    const [indexOfLastItem, setIndexOfLastItem] = useState(12)
    const [currentCards, setCurrentCards] = useState(cards.slice(0, indexOfLastItem)) 

    const showMoreCards = () => {
        console.log('show')
        setCurrentCards(cards.slice(0, indexOfLastItem + 6));
        setIndexOfLastItem((prev) => prev + 6)
    }
    //   const handleHeartClick = (index) => {
    //     if (clickedIndexes.includes(index)) {
    //       setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    //     } else {
    //       setClickedIndexes([...clickedIndexes, index]);
    //     }
    //   };
    return (
        <>
        <Breadcrambs current={'Услуги'}/>
        <Categories/>
        <section className='catalog'>
            <h2 className="catalog__title">Каталог</h2>
            <ContentServices data={currentCards} isLoading={isLoading} showMoreCards={showMoreCards}/>
        </section>
        <PlaceServices/>
    </>
  )
}
