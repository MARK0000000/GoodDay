import React, { useState, useContext, useEffect} from 'react';
import PosterCard from '../../components/posters/PosterCard';
import PostersDate from '../../components/posters/PostersDate';
import Breadcrambs from '../../components/main/Breadcrambs';
import { CityContext } from '../../context/City';
import { SearchContext } from '../../context/Search';
import { PosterCategoriesContext } from '../../context/PosterCategories';
import { fetchGet } from '../../api/fetch';
import useEndpoints from '../../api/apiConfig';
import { SkeletonPosterCard } from '../../components/UI/loaders/SkeletopPosterCard'; 
import PostersCategory from '../../components/posters/PostersCategory';
import NothingFound from '../../components/UI/loaders/NothingFound';

export default function PosterCategoryPage() {
    const endpoints = useEndpoints();
    const {setIsSearchLoading, searchValue} = useContext(SearchContext)
    const { categories, selectedCategory } = useContext(PosterCategoriesContext);
    const {city, cityName} = useContext(CityContext)
  
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [allDates, setAllDates] = useState(true)

    const toggleAllDates = (state) => {
        setAllDates(state)
        
    }

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
    }, [city, selectedDate, allDates, searchValue]);


    useEffect(() => {
        const fetchSoonData = async () => {
            if (currentPageSoon === 1) {
                setIsSoonLoading(true);
            } 

            if (searchValue !== '') {
                try {
                    const result = await fetchGet(`${endpoints.SEARCH_POSTER_SOON}&pageNumber=${currentPageSoon}&pageSize=${itemsPerPageSoon}&keyword=${searchValue}`);
                    if (result) {
                        if (currentPageSoon !== 1) {
                        setCardsSoon(prevCards => [...prevCards, ...result]); 
                        } else {
                            setCardsSoon(result)
                        }
                    }
                } catch (error) {
                    console.error("Error fetching soon data:", error);
                } finally {
                    if (currentPageSoon === 1) {
                        setIsSoonLoading(false);
                    }
                }    
            } else {
                try {
                    const result = await fetchGet(`${endpoints.POSTER_CATEGORY_SOON}&pageNumber=${currentPageSoon}&pageSize=${itemsPerPageSoon}`);
                    if (result) {
                        if (currentPageSoon !== 1) {
                            setCardsSoon(prevCards => [...prevCards, ...result]); 
                            } else {
                                setCardsSoon(result)
                            }
                        }
                } catch (error) {
                    console.error("Error fetching soon data:", error);
                } finally {
                    if (currentPageSoon === 1) {
                        setIsSoonLoading(false);
                    }
                }
            }
        };
        fetchSoonData(); 
    }, [currentPageSoon, city, searchValue, endpoints.SEARCH_POSTER_SOON, endpoints.POSTER_CATEGORY_SOON, itemsPerPageSoon]);

    const foundCategory = categories.find(category => category.categoryRoute === selectedCategory);

    useEffect(() => {
        if (!selectedCategory) return; 

        
        if (!foundCategory) return; 

        const fetchData = async () => {
            if (currentPage === 1) {
                setIsLoading(true); 
            } 
            if(searchValue !== '') {
                if (allDates) {
                    try {
                        const result = await fetchGet(`${endpoints.SEARCH_POSTER_CATEGORIES_WITHOUT_DATE}&categoryId=${foundCategory.idCategory}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&date=${selectedDate}&keyword=${searchValue}`);
                        if (result) {
                            if (currentPage !== 1) {
                            setCards(prevCards => [...prevCards, ...result]); 
                            } else {
                                setCards(result)
                            }
                        }
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    } finally {
                        setIsSearchLoading(false)
                        if (currentPage === 1) {
                            setIsLoading(false);
                        }
                    }    
                } else {
                    try {
                        const result = await fetchGet(`${endpoints.SEARCH_POSTER_CATEGORIES}&categoryId=${foundCategory.idCategory}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&date=${selectedDate}&keyword=${searchValue}`);
                        if (result) {
                            if (currentPage !== 1) {
                                setCards(prevCards => [...prevCards, ...result]); 
                                } else {
                                    setCards(result)
                                }
                            }
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    } finally {
                        setIsSearchLoading(false)
                        if (currentPage === 1) {
                            setIsLoading(false);
                        }
                    }    
                }
            } else{
                if (allDates) {
                    try {
                        const result = await fetchGet(`${endpoints.POSTERS_CATEGORY_WITHOUT_DATE}&categoryId=${foundCategory.idCategory}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&date=${selectedDate}`);
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
                        const result = await fetchGet(`${endpoints.POSTER_CATEGORY}&categoryId=${foundCategory.idCategory}&pageNumber=${currentPage}&pageSize=${itemsPerPage}&date=${selectedDate}`);
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
            }
        };

        fetchData();

    }, [currentPage, city, selectedCategory, selectedDate, searchValue, allDates, foundCategory, endpoints.SEARCH_POSTER_CATEGORIES_WITHOUT_DATE, endpoints.SEARCH_POSTER_CATEGORIES, endpoints.POSTERS_CATEGORY_WITHOUT_DATE, endpoints.POSTER_CATEGORY, itemsPerPage, setIsSearchLoading]); 

    return (
        <section className='postersCategoryPage'>
            <Breadcrambs mainRoute={"posters"} main={"Афиша"} current={foundCategory.categoryName} />
            <PostersDate 
                setSelectedDate={setSelectedDate} 
                selectedDate={selectedDate} 
                setStartDate={setStartDate} 
                startDate={startDate} 
                resetPage={resetPage} 
                allDates={allDates}
                toggleAllDates={toggleAllDates}
            />
            <h1 className='postersCategoryPage__title'>{foundCategory.categoryName} в <span>{cityName}</span></h1>
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
               link={'soon'} 
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