import React, { useEffect, useState, useContext } from 'react';
import ContentServices from '../components/services/ContentServices';
import PlaceServices from '../components/services/PlaceServices';
import { fetchGetCategory } from '../api/fetch';
import useEndpoints from '../api/apiConfig';
import { SkeletonContentServices } from '../components/UI/loaders/SkeletonContetServices';
import { SearchContext } from '../context/Search';
import { CityContext } from '../context/City';
import Add from '../components/categoryPage/Add';
export default function Services() {
    const endpoints = useEndpoints();
    const { data } = useContext(SearchContext); 
    const { city } = useContext(CityContext);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [originalCards, setOriginalCards] = useState(true); 
    const [previousData, setPreviousData] = useState(null);
    const [totalCount, setTotalCount] = useState();

    useEffect(() => {
        setCards([]); 
        setCurrentPage(1); 
        setIsLoading(true); 
        setOriginalCards(true); 
    }, [city]);

    useEffect(() => {
        const fetchData = async () => {
            if (data && data.data) {
                if (previousData !== data.data) {
                    setCards(data.data.slice(0, itemsPerPage)); 
                    setTotalCount(data.totalCount);
                    setCurrentPage(1); 
                    setOriginalCards(false); 
                    setPreviousData(data.data); 
                } else {
                    const slicedData = data.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
                    
                    const newCards = slicedData.filter(newCard => 
                        !cards.some(existingCard => existingCard.id === newCard.id) 
                    );
                
                    setCards(prev => [...prev, ...newCards]);
                }
                setIsLoading(false);
            } else {
                if (previousData !== null) {
                    setCurrentPage(1); 
                    setPreviousData(null); 
                }

                const response = await fetchGetCategory(`${endpoints.SERVICE}&pageSize=${itemsPerPage}&pageNumber=${currentPage}`);
                console.log(response.data)
                if (originalCards === false) {
                    setCards([]); 
                    setOriginalCards(true);
                }
                if (Array.isArray(response.data)) {
                    setCards(prev => [...prev, ...response.data]); 
                    setTotalCount(response.totalCount);
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

    return (
        <>
            <Add/>
            <section className='catalog'>
                <h2 className="catalog__title">Каталог</h2>
                {isLoading ?
                    <div className='service__loaderBox'>
                        {[...Array(15)].map((_, index) => <SkeletonContentServices key={index} />)}
                    </div>
                    :
                    <ContentServices totalCount={totalCount} data={cards} showMoreCards={showMoreCards} />
                }
            </section>
            <PlaceServices />
        </>
    );
}