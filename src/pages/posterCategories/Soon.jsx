import React, { useState, useContext, useEffect } from 'react';
import PosterCard from '../../components/posters/PosterCard';
import PostersDate from '../../components/posters/PostersDate';
import Breadcrambs from '../../components/main/Breadcrambs';
import { CityContext } from '../../context/City';
import { SearchContext } from '../../context/Search';
import { PosterCategoriesContext } from '../../context/PosterCategories';
import { fetchGet } from '../../api/fetch';
import useEndpoints from '../../api/apiConfig';
import { SkeletonPosterCard } from '../../components/UI/loaders/SkeletopPosterCard'; 
import NothingFound from '../../components/UI/loaders/NothingFound';

export default function Soon() {
    const endpoints = useEndpoints();
    const { setIsSearchLoading, searchValue } = useContext(SearchContext);
    const { categories, selectedCategory } = useContext(PosterCategoriesContext);
    const {city, updateCity, cities, cityName} = useContext(CityContext)
  
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);


    const showMoreCards = () => {
        setCurrentPage(prev => prev + 1);
    };

    useEffect(() => {
        setCards([]); 
        setCurrentPage(1); 
        setIsLoading(true); 
    }, [city]);


    useEffect(() => {
        const fetchData = async () => {
            if (currentPage === 1) {
                setIsLoading(true); 
            } 
            if (searchValue != '') {
                try {
                    const result = await fetchGet(`${endpoints.SEARCH_POSTER_SOON}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&keyword=${searchValue}`);
                    if (result) {
                        setCards(prevCards => [...prevCards, ...result]); 
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setIsSearchLoading(false); 
                    if (currentPage === 1) {
                        setIsLoading(false);
                    }
                }    
            } else {
                try {
                    const result = await fetchGet(`${endpoints.POSTER_CATEGORY_SOON}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`);
                    if (result) {
                        setCards(prevCards => [...prevCards, ...result]); 
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setIsSearchLoading(false); 
                    if (currentPage === 1) {
                        setIsLoading(false);
                    }
                }
            }
        };

        fetchData();

    }, [currentPage, city, selectedCategory, searchValue]); 

    return (
        <section className='postersCategoryPage'>
            <Breadcrambs mainRoute={"posters"} main={"Афиша"} current="Скоро" />
            <h1 className='postersCategoryPage__title'>Скоро в <span>{cityName}</span></h1>
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
        </section>
    );
}