import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchGetWithCount } from '../api/fetch';
import { useLocation } from 'react-router-dom';
import { getEndpoint } from '../utils/workWithUrl';
import { PosterCategoriesContext } from './PosterCategories';
import useEndpoints from '../api/apiConfig';
import { CityContext } from './City';
import { CategoriesContext } from './CategoriesContext';
import { TypeOfDataContext } from './TypeOfData';
export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const { city } = useContext(CityContext)
  const { discountCategory, promotionCategory } = useContext(CategoriesContext)
  const { type } = useContext(TypeOfDataContext)
  const endpoints = useEndpoints()
  const location = useLocation();
  const endpoint = getEndpoint(location);
  const { categoriesLoading, categories } = useContext(PosterCategoriesContext)
  let fullPath = location.pathname.slice(1)

  const routes = {
    discounts: `${endpoints.SEARCH_DISCOUNTS}`,
    discountCategories: (categoryId) => `${endpoints.SEARCH_DISCOUNT_CATEGORY}&categoryId=${categoryId}`,
    promotionCategories: (categoryId) => `${endpoints.SEARCH_PROMOTION_CATEGORY}&categoryId=${categoryId}`,
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
          url = discountCategory ? routes.discountCategories(discountCategory) : routes.discounts;
        } else if (endpoint === 'promotion') {
          url = promotionCategory ? routes.promotionCategories(promotionCategory) : routes.promotions;
        } else if (endpoint === 'services') {
          url = routes.services;
        } else if (endpoint === 'posters') {
          setIsSearchLoading(true)
          setData({ data: [] })
        } else if ((fullPath === 'posters' || categories.filter((category) => category.categoryRoute === fullPath.split('/')[1]).length !== 0) && typeof fullPath.split('/')[2] == "undefined") {
          setIsSearchLoading(true);
          setData({ data: [] })
        } else {
          console.log('Unknown endpoint');
          setIsSearchLoading(false)
          return;
        }

        try {
          const response = await fetchGetWithCount(url + `&keyword=${searchValue}`);
          if (response) {
            console.log(response)
            setData(response);
            setIsSearchLoading(false)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    !categoriesLoading && fetchSearchData();
  }, [searchValue, endpoint, city, discountCategory, promotionCategory, type]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, data, setData, isSearchLoading, setIsSearchLoading, }}>
      {children}
    </SearchContext.Provider>
  );
};

