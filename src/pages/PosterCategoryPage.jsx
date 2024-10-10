import React, { useState, useContext, useEffect } from 'react';
import PosterCard from '../components/posters/PosterCard';
import PostersDate from '../components/posters/PostersDate';
import Breadcrambs from '../components/main/Breadcrambs';
import { CityContext } from '../context/City';
import { SearchContext } from '../context/Search';
import { PosterCategoriesContext } from '../context/PosterCategories';
import { fetchGet } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { SkeletonPosterCard } from '../components/UI/loaders/SkeletopPosterCard'; 
import PostersCategory from '../components/posters/PostersCategory';
import NothingFound from '../components/UI/loaders/NothingFound';

export default function PosterCategoryPage() {
    const endpoints = useEndpoints();
    const { data } = useContext(SearchContext);
    const { categories, selectedCategory } = useContext(PosterCategoriesContext);
    const {city, updateCity, cities} = useContext(CityContext)
    const cityName = cities.find(item => item.id === city);
  
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(startDate.toISOString().split('T')[0]);

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const [cardsSoon, setCardsSoon] = useState([]);
    const [isSoonLoading, setIsSoonLoading] = useState(true);
    const [itemsPerPageSoon] = useState(6);
    const [currentPageSoon, setCurrentPageSoon] = useState(1);

    const resetPage = () => {
        setCurrentPage(1);
        setCards([]); 
        setIsLoading(true); 
    };

    const showMoreCards = () => {
        setCurrentPage(prev => prev + 1);
    };

    const showMoreSoonCards = () => {
        setCurrentPageSoon(prev => prev + 1);
    };
    useEffect(() => {
        setCards([]); 
        setCurrentPage(1); 
        setIsLoading(true); 
        setCardsSoon([])
        setCurrentPageSoon(1)
        setIsSoonLoading(true)
    }, [city]);


    useEffect(() => {
        const fetchSoonData = async () => {
            if (currentPageSoon === 1) {
                setIsSoonLoading(true);
            } 
            try {
                const result = await fetchGet(`${endpoints.POSTER_CATEGORY_SOON}&pageNumber=${currentPageSoon}&pageSize=${itemsPerPageSoon}`);
                if (result) {
                    setCardsSoon(prevCards => [...prevCards, ...result]); 
                }
            } catch (error) {
                console.error("Error fetching soon data:", error);
            } finally {
                if (currentPageSoon === 1) {
                    setIsSoonLoading(false);
                }
            }
        };
        fetchSoonData(); 
    }, [currentPageSoon, city]);

    const foundCategory = categories.find(category => category.categoryRoute === selectedCategory);
    useEffect(() => {
        if (!selectedCategory) return; 

        
        if (!foundCategory) return; 

        const fetchData = async () => {
            if (currentPage === 1) {
                setIsLoading(true); 
            } 
            try {
                const result = await fetchGet(`${endpoints.POSTER_CATEGORY}&categoryId=${foundCategory.idCategory}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&date=${selectedDate}`);
                if (result) {
                    setCards(prevCards => [...prevCards, ...result]); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                if (currentPage === 1) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

    }, [currentPage, city, selectedCategory, selectedDate]); 

    return (
        <section className='postersCategoryPage'>
            <Breadcrambs current={foundCategory.categoryName} />
            <PostersDate 
                setSelectedDate={setSelectedDate} 
                selectedDate={selectedDate} 
                setStartDate={setStartDate} 
                startDate={startDate} 
                resetPage={resetPage} 
            />
            <h1 className='postersCategoryPage__title'>{foundCategory.categoryName} <span>{cityName.name}</span></h1>
            <div className="postersCategoryPage__content">
                {isLoading && currentPage === 1 ? ( 
                    [...Array(12)].map((_, index) => (
                        <SkeletonPosterCard key={index} />
                    ))
                ) : (
                    cards.map((item, index) =>
                        <PosterCard key={index} data={item} />
                    )
                )}
            </div>
                {(!(cards && cards.length > 0) && !isLoading) && <NothingFound/> }
            {cards.length >= 12 &&
                <button 
                    className="postersCategoryPage__button"
                    onClick={() => showMoreCards()}
                >
                    Показать еще
                </button>
            }
            <PostersCategory
               title="Скоро" 
               link={''} 
               data={cardsSoon} 
               isLoading={isSoonLoading} 
            />
            {cardsSoon.length >= 6 &&
                <button 
                    className="postersCategoryPage__button"
                    onClick={() => showMoreSoonCards()}
                >
                    Показать еще
                </button>
            }
        </section>
    );
}