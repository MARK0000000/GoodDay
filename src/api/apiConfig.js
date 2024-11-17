// endpoints.js
import React, { useContext } from 'react';
import { CityContext } from '../context/City';
import { TypeOfDataContext } from '../context/TypeOfData';
// production
// const API_BASE_URL = 'https://vh369.by2040.ihb.by';
// dev
const API_BASE_URL = 'https://elated-turing.178-124-131-24.plesk.page';

const useEndpoints = () => {
  const { city } = useContext(CityContext);
  const cityid = city;

  const {type} = useContext(TypeOfDataContext)
  const routeType = type === 'discounts' ? 'business' : 'promotion'

  return {
    UPLOADS: `https://api.good-day.by/uploads`,
    PDF: `${API_BASE_URL}/pdfs/`,
    CITIES: `${API_BASE_URL}/city/all`,

    DISCOUNTS: `${API_BASE_URL}/business/discount?cityId=${cityid}&isDiscount=true&isServices=false&isInfo=false`,
    DISCOUNT_BY_ID: `${API_BASE_URL}/business/`,

    PROMOTION: `${API_BASE_URL}/promotion/all?cityId=${cityid}`,
    PROMOTION_BY_ID: `${API_BASE_URL}/promotion/`,
    SERVICE: `${API_BASE_URL}/service/all?cityId=${cityid}`,
    SERVICE_BY_ID: `${API_BASE_URL}/service/`,

    EDUCATION: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=2&isServices=false&isInfo=false`,
    GIFTS: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=3&isServices=false&isInfo=false`,
    FOOD: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=4&isServices=false&isInfo=false`,
    HEALTH: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=5&isServices=false&isInfo=false`,
    BEAUTY: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=6&isServices=false&isInfo=false`,
    ENTERTAIMENT: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=7&isServices=false&isInfo=false`,
    AUTO: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=8&isServices=false&isInfo=false`,
    RECREACTION: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=9&isServices=false&isInfo=false`,
    CHILDREN: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=10&isServices=false&isInfo=false`,
    CLOTHESANDSHOES: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=11&isServices=false&isInfo=false`,
    ACCESSORIES: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=12&isServices=false&isInfo=false`,
    EVERYTHINGFORHOME: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=13&isServices=false&isInfo=false`,
    REPAIR: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=14&isServices=false&isInfo=false`,
    OTHER: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=15&isServices=false&isInfo=false`,
    EQUIPMENT: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=16&isServices=false&isInfo=false`,
    PETS: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=17&isServices=false&isInfo=false`,
    MASTERCLASSES: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=18&isServices=false&isInfo=false`,
    SPORT: `${API_BASE_URL}/${routeType}/category?cityId=${cityid}&categoryId=19&isServices=false&isInfo=false`,

    SEARCH_DISCOUNTS: `${API_BASE_URL}/search/discounts?cityId=${cityid}`,
    SEARCH_CATEGORY: `${API_BASE_URL}/search/${routeType}-category?cityId=${cityid}`,
    SEARCH_PROMOTIONS: `${API_BASE_URL}/search/promotions?cityId=${cityid}`,
    SEARCH_SERVICES: `${API_BASE_URL}/search/services?cityId=${cityid}`,
    SEARCH_POSTER_CATEGORIES: `${API_BASE_URL}/search/posters?cityId=${cityid}`,
    SEARCH_POSTER_CATEGORIES_WITHOUT_DATE: `${API_BASE_URL}/search/poster-without-date?cityId=${cityid}`,

    SEARCH_POSTER_SOON: `${API_BASE_URL}/search/poster-soon?cityId=${cityid}`,

    PARTNERSHIP_FORM: `${API_BASE_URL}/partner/create-partner`,

    POSTER_CATEGORIES: `${API_BASE_URL}/posters/categories`,
    POSTERS_CATEGORY_WITHOUT_DATE: `${API_BASE_URL}/posters/category-without-date?cityId=${cityid}`,
    POSTERS_BY_ID: `${API_BASE_URL}/posters/`,
    POSTER_CATEGORY: `${API_BASE_URL}/posters/category?cityId=${cityid}`,
    POSTER_CATEGORY_SOON: `${API_BASE_URL}/posters/category/soon?cityId=${cityid}`,
    POSTERS_INFO: `${API_BASE_URL}/posters/info`,

  };
};

export default useEndpoints;
