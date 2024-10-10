import React, { useEffect, useState, useContext } from 'react';
import ContentServices from '../components/services/ContentServices';
import Breadcrambs from '../components/main/Breadcrambs';
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import PlaceServices from '../components/services/PlaceServices';
import Categories from '../components/services/Categories';
import { SkeletonContentServices } from '../components/UI/loaders/SkeletonContetServices';
import { SearchContext } from '../context/Search';
import { CityContext } from '../context/City';
export default function Services() {
    const endpoints = useEndpoints();
    const { data } = useContext(SearchContext); 
    const { city } = useContext(CityContext);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [choiceCategory, setChoiceCategory] = useState(1); &caregotyId=${choiceCategory}
    const [itemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [originalCards, setOriginalCards] = useState(true); 
    
    useEffect(() => {
        setCards([]); 
        setCurrentPage(1); 
        setIsLoading(true); 
    }, [city]);

    useEffect(() => {
        const fetchData = async () => {
            if (data && data.data) {
                const slicedData = data.data.slice(0, itemsPerPage);
                setCards(slicedData);
                setOriginalCards(false)
                setIsLoading(false);
                setCurrentPage(1)
            } else {
                const response = await fetchGet(`${endpoints.SERVICE}&pageSize=${itemsPerPage}&pageNumber=${currentPage}`);
                if (originalCards == false) {
                    setCards([])
                    setOriginalCards(true)
                }
                if (Array.isArray(response)) {
                    setCards(prev => [...prev, ...response]); 
                    setIsLoading(false);
                } else {
                    console.error('Data is not an array:', response); 
                }
            }
        };
        fetchData();
    }, [currentPage, data, city]); 
       
    const showMoreCards = () => {
        setCurrentPage(prev => prev + 1);
    };

    // const changeCategory = (id) => {
    //     setChoiceCategory(id);
    //     setCards([]); // Сбрасываем карты при смене категории
    //     setCurrentPage(1); // Сбрасываем текущую страницу
    // };

    return (
        <>
            {/* <Breadcrambs current={'Услуги'} /> */}
            {/* <Categories choiceCategory={choiceCategory} changeCategory={changeCategory} /> */}
            <section className='catalog'>
                <h2 className="catalog__title">Каталог</h2>
                {isLoading ?
                    <div className='service__loaderBox'>
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                        <SkeletonContentServices />
                    </div>
                    :
                    <ContentServices data={cards} showMoreCards={showMoreCards}/>
                }
            </section>
            <PlaceServices />
        </>
    );
}

    //   const handleHeartClick = (index) => {
    //     if (clickedIndexes.includes(index)) {
    //       setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    //     } else {
    //       setClickedIndexes([...clickedIndexes, index]);
    //     }
    //   };
