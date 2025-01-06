import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useEndpoints from '../api/apiConfig';
import { fetchGet } from '../api/fetch';
import { TypeOfDataContext } from './TypeOfData';
import { useLocation } from 'react-router-dom';
export const PosterCategoriesContext = createContext(null);

export const PosterCategoriesProvider = ({ children }) => {
  const { type } = useContext(TypeOfDataContext)
  const [categories, setCategories] = useLocalStorage('categories', [])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const endpoints = useEndpoints();
  const [selectedCategory, setSelectedCategory] = useLocalStorage("selectedCategory", null)

  const [navCategories, setNavCategories] = useState([])
  const [soonIsEpmty, setSoonIsEpmty] = useState(true)
  const selectCategory = (category) => {
    setSelectedCategory(category)
  }
  const location = useLocation();
  const fetchData = async () => {
    const result = await fetchGet(`${endpoints.POSTER_CATEGORIES}`);
    if (result) {
      setCategories(result)
      setCategoriesLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    setNavCategories([])
    setSoonIsEpmty(true)
  }, [type, location.pathname])


  return (
    <PosterCategoriesContext.Provider value={{ categories, selectCategory, selectedCategory, categoriesLoading, navCategories, setNavCategories, soonIsEpmty, setSoonIsEpmty }}>
      {children}
    </PosterCategoriesContext.Provider>
  );
};
