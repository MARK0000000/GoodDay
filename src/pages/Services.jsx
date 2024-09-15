import React, { useEffect, useState } from 'react';
import ContentServices from '../components/services/ContentServices';
import Breadcrambs from '../components/main/Breadcrambs';
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import PlaceServices from '../components/services/PlaceServices';
import Categories from '../components/services/Categories';
import { SkeletonContentServices } from '../components/UI/loaders/SkeletonContetServices';

export default function Services() {
    const endpoints = useEndpoints();

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [choiceCategory, setChoiceCategory] = useState(1); &caregotyId=${choiceCategory}
    const [itemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchGet(`${endpoints.SERVICE}&pageSize=${itemsPerPage}&pageNumber=${currentPage}`);
            if (Array.isArray(data)) { // Проверяем, что data - это массив
                setCards(prev => [...prev, ...data]); // Объединяем массивы
                setIsLoading(false);
                console.log(data);
            } else {
                console.error('Data is not an array:', data); // Логируем ошибку, если data не массив
            }
        };
        fetchData();
    }, [currentPage]);

    const showMoreCards = () => {
        console.log('show');
        setCurrentPage(prev => prev + 1);
    };

    // const changeCategory = (id) => {
    //     setChoiceCategory(id);
    //     setCards([]); // Сбрасываем карты при смене категории
    //     setCurrentPage(1); // Сбрасываем текущую страницу
    // };

    console.log(cards);
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
