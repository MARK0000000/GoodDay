import React, { useState, useContext, useEffect } from 'react';
import PostersCategory from '../components/posters/PostersCategory';
import PostersDate from '../components/posters/PostersDate';
import { CityContext } from '../context/City';
import { PosterCategoriesContext } from '../context/PosterCategories';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
import PostersInfo from '../components/posters/PostersInfo';
import { SearchContext } from '../context/Search';
import NothingFound from '../components/UI/loaders/NothingFound';
import { TypeOfDataContext } from '../context/TypeOfData';

export default function Posters() {
    const { city, cityName } = useContext(CityContext);
    const { setIsSearchLoading, searchValue } = useContext(SearchContext)
    const endpoints = useEndpoints();
    const { categories, categoriesLoading, setNavCategories, setSoonIsEpmty } = useContext(PosterCategoriesContext);
    const { changeType } = useContext(TypeOfDataContext)
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [allDates, setAllDates] = useState(true)

    const toggleAllDates = (state) => {
        setAllDates(state)

    }
    const [loadedCategoriesCount, setLoadedCategoriesCount] = useState(0);

    const [loadingStates, setLoadingStates] = useState({});
    const [data, setData] = useState({});
    const [info, setInfo] = useState([]);
    const [isInfoLoading, setIsInfoLoading] = useState(true);
    const [soonData, setSoonData] = useState([]);
    const [isSoonLoading, setIsSoonLoading] = useState(true);
    const pageNumber = 1;
    const pageSize = 6;

    const fetchInfo = async () => {
        const result = await fetchGet(`${endpoints.POSTERS_INFO}`);
        if (result) {
            setInfo(result);
            setIsInfoLoading(false);
        }
    };


    const fetchSoonCategories = async () => {
        setIsSoonLoading(true);
        if (searchValue !== '') {
            try {
                const result = await fetchGet(`${endpoints.SEARCH_POSTER_SOON}&keyword=${searchValue}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                setSoonData(result);
                if (result.length !== 0) {
                    setSoonIsEpmty(false)
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных для ближайших категорий:", error);
            } finally {
                setIsSoonLoading(false);
            }
        } else {
            try {
                const result = await fetchGet(`${endpoints.POSTER_CATEGORY_SOON}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                setSoonData(result);
                if (result.length !== 0) {
                    setSoonIsEpmty(false)
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных для ближайших категорий:", error);
            } finally {
                setIsSoonLoading(false);
            }
        }
    };

    const fetchDataByCategory = async (category) => {
        setLoadingStates(prev => ({ ...prev, [category.idCategory]: true }));
        if (searchValue !== '') {
            if (allDates) {
                try {
                    const result = await fetchGet(`${endpoints.SEARCH_POSTER_CATEGORIES_WITHOUT_DATE}&categoryId=${category.idCategory}&keyword=${searchValue}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                    setData(prev => ({ ...prev, [category.idCategory]: result }));
                    if (result.length !== 0) {
                        setNavCategories(prev => [...prev, category])
                    }
                } catch (error) {
                    console.error(`Ошибка при загрузке данных для категории ${category.categoryName}:`, error);
                } finally {
                    setLoadingStates(prev => ({ ...prev, [category.idCategory]: false }));
                    setLoadedCategoriesCount(prevCount => prevCount + 1);
                }
            } else {
                try {
                    const result = await fetchGet(`${endpoints.SEARCH_POSTER_CATEGORIES}&categoryId=${category.idCategory}&date=${selectedDate}&keyword=${searchValue}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                    setData(prev => ({ ...prev, [category.idCategory]: result }));
                    if (result.length !== 0) {
                        setNavCategories(prev => [...prev, category])
                    }
                } catch (error) {
                    console.error(`Ошибка при загрузке данных для категории ${category.categoryName}:`, error);
                } finally {
                    setLoadingStates(prev => ({ ...prev, [category.idCategory]: false }));
                    setLoadedCategoriesCount(prevCount => prevCount + 1);
                }
            }
        } else {
            if (allDates) {
                try {
                    const result = await fetchGet(`${endpoints.POSTERS_CATEGORY_WITHOUT_DATE}&categoryId=${category.idCategory}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
                    setData(prev => ({ ...prev, [category.idCategory]: result }));
                    if (result.length !== 0) {
                        setNavCategories(prev => [...prev, category])
                    }
                } catch (error) {
                    console.error(`Ошибка при загрузке данных для категории ${category.categoryName}:`, error);
                } finally {
                    setLoadingStates(prev => ({ ...prev, [category.idCategory]: false }));
                    setLoadedCategoriesCount(prevCount => prevCount + 1);
                }
            } else {
                try {
                    const result = await fetchGet(`${endpoints.POSTER_CATEGORY}&categoryId=${category.idCategory}&pageNumber=${pageNumber}&pageSize=${pageSize}&date=${selectedDate}`);
                    setData(prev => ({ ...prev, [category.idCategory]: result }));
                    if (result.length !== 0) {
                        setNavCategories(prev => [...prev, category])
                    }
                } catch (error) {
                    console.error(`Ошибка при загрузке данных для категории ${category.categoryName}:`, error);
                } finally {
                    setLoadingStates(prev => ({ ...prev, [category.idCategory]: false }));
                    setLoadedCategoriesCount(prevCount => prevCount + 1);
                }
            }
        }
    };
    useEffect(() => {
        changeType("posters")
        setData([]);
        setLoadedCategoriesCount(0);
        setNavCategories([])
        setSoonIsEpmty(true)
        if (searchValue !== '') {
            setNavCategories([])
            setSoonIsEpmty(true)
        }
        if (!categoriesLoading) {
            categories.forEach(category => {
                fetchDataByCategory(category);
            });
            fetchSoonCategories();
        }
        fetchInfo()
    }, [selectedDate, city, searchValue, allDates, categories]);


    useEffect(() => {
        if (loadedCategoriesCount === categories.length) {
            setIsSearchLoading(false)
        }
    }, [loadedCategoriesCount, categories.length]);

    const allDataEmpty = Object.values(data).every(arr => Array.isArray(arr) && arr.length === 0);

    return (
        <section className='posters'>
            {!isInfoLoading && <PostersInfo data={info} />}
            <PostersDate
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                setStartDate={setStartDate}
                startDate={startDate}
                allDates={allDates}
                toggleAllDates={toggleAllDates}
            />
            <h1 className="posters__title">Афиша мероприятий <span>{cityName}</span></h1>
            {(loadedCategoriesCount === categories.length && allDataEmpty) &&
                <NothingFound />
            }
            {categories.map(category => (
                <div key={category.idCategory}>
                    <PostersCategory
                        id={`category-${category.idCategory}`}
                        title={category.categoryName}
                        link={category.categoryRoute}
                        data={data[category.idCategory]}
                        isLoading={loadingStates[category.idCategory]}
                    />
                </div>
            ))}
            <PostersCategory
                id={`category-soon`}
                title="Скоро"
                link="soon"
                data={soonData}
                isLoading={isSoonLoading}
            />
        </section>
    );
}