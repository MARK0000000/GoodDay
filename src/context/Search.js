import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchGetCategory } from '../api/fetch';
import { useLocation } from 'react-router-dom';
import { getEndpoint } from '../utils/workWithUrl';
import { PosterCategoriesContext } from './PosterCategories';
import useEndpoints from '../api/apiConfig';
import { CityContext } from './City';

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const {city} = useContext(CityContext)
  const endpoints = useEndpoints()
  const location = useLocation();
  const endpoint = getEndpoint(location);
  const {categories} = useContext(PosterCategoriesContext)
  let fullPath = location.pathname.slice(1)

  const getCategoryId = {
    education: 2,
    gifts: 3,
    food: 4,
    health: 5,
    beauty: 6,
    entertainment: 7,
    auto: 8,
    recreation: 9,
    children: 10,
    clothesandshoes: 11,
    accessories: 12,
    everythingforhome: 13,
    repair: 14,
    other: 15,
    equipment: 16,
    pets: 17,
    masterclasses: 18,
    sport: 19,
  };

  const routes = {
    discounts: `${endpoints.SEARCH_DISCOUNTS}`,
    category: (categoryId) => `${endpoints.SEARCH_CATEGORY}&categoryId=${categoryId}`,
    promotions: `${endpoints.SEARCH_PROMOTIONS}`,
    services: `${endpoints.SEARCH_SERVICES}`,
  };

  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(true)


  useEffect(() => {
    setIsSearchLoading(true)
    const fetchSearchData = async () => {
      if (searchValue !== '') {
        let url;
        if (endpoint === 'discounts') {
          url = routes.discounts;
        } else if (endpoint in getCategoryId) {
          url = routes.category(getCategoryId[endpoint]);
        } else if (endpoint === 'promotion') {
          url = routes.promotions;
        } else if (endpoint === 'services') {
          url = routes.services;
        } else if (endpoint === 'posters'){
          setIsSearchLoading(true)
        } else if (fullPath.startsWith('posters/')){
           const categoryRoute = endpoint.split('/')[1];
          
           const categoryExists = categories.some(category => category.categoryRoute === categoryRoute);
           
           if (categoryExists) {
             setIsSearchLoading(true);
           }
        } else {
          // setSearchValue('')
          console.log('Unknown endpoint');
          setIsSearchLoading(false)
          return;
        }

        try {
          const response = await fetchGetCategory(url + `&keyword=${searchValue}`);
          if (response) {
            setData(response);
            setIsSearchLoading(false)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        setData(null)
      }
    };

    fetchSearchData();
  }, [searchValue, endpoint, city]);
  
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, data, setData, isSearchLoading, setIsSearchLoading, getCategoryId }}>
      {children}
    </SearchContext.Provider>
  );
};

