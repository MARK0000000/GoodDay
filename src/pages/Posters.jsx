import React, { useState, useContext, useEffect } from 'react';
import PostersCategory from '../components/posters/PostersCategory';
import PostersDate from '../components/posters/PostersDate';
import { CityContext } from '../context/City';
import { PosterCategoriesContext } from '../context/PosterCategories';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
import PostersInfo from '../components/posters/PostersInfo';
export default function Posters() {
    const {city, updateCity, cities} = useContext(CityContext)
    const cityName = cities.find(item => item.id === city);
    const endpoints = useEndpoints();
    const { categories } = useContext(PosterCategoriesContext);
    
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(startDate.toISOString().split('T')[0]);
    
    // States for loading and data
    const [loadingStates, setLoadingStates] = useState({});
    const [data, setData] = useState({});
    const [info, setInfo] = useState([])
    const [isInfoLoading, setIsInfoLoading] = useState(true)
    const pageNumber = 1;
    const pageSize = 6;

    const fetchInfo = async () => {
        const result = await fetchGet(`${endpoints.POSTERS_INFO}`);
        if (result) {
            setInfo(result)
            setIsInfoLoading(false)
        }
      };


    // Function to fetch data by category
    const fetchDataByCategory = async (category) => {
        setLoadingStates(prev => ({ ...prev, [category.idCategory]: true }));
        
        try {
            const result = await fetchGet(`${endpoints.POSTER_CATEGORY}&categoryId=${category.idCategory}&pageNumber=${pageNumber}&pageSize=${pageSize}&date=${selectedDate}`);
            setData(prev => ({ ...prev, [category.idCategory]: result }));
        } catch (error) {
            console.error(`Ошибка при загрузке данных для категории ${category.categoryName}:`, error);
        } finally {
            setLoadingStates(prev => ({ ...prev, [category.idCategory]: false }));
        }
    };
    // Fetch data for each category
    useEffect(() => {
        setData([]); 
        categories.forEach(category => {
            fetchDataByCategory(category);
        });
        fetchInfo()
    }, [categories, selectedDate, city]);

    return (
        <section className='posters'>
            {!isInfoLoading &&
                <PostersInfo data={info}/>
            }
            <PostersDate setSelectedDate={setSelectedDate} selectedDate={selectedDate} setStartDate={setStartDate} startDate={startDate} />
            <h1 className="posters__title">Афиша мероприятий <span>{cityName.name}</span></h1>
            
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
        </section>
    );
}