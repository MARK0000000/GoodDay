import { useContext } from 'react';
import { CityContext } from '../context/City';

const useEndpoints = () => {
  const { city } = useContext(CityContext);
  const cityid = city;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const UPLOADS = process.env.REACT_APP_UPLOADS;

  return {
    UPLOADS: `${UPLOADS}`,
    PDF: `${API_BASE_URL}/pdfs/`,
    CITIES: `${API_BASE_URL}/city/all`,

    DISCOUNTS: `${API_BASE_URL}/business/discount?cityId=${cityid}&isDiscount=true&isServices=false&isInfo=false`,
    DISCOUNTS_CATEGORY: `${API_BASE_URL}/business/category?cityId=${cityid}&isServices=false&isInfo=false`,
    DISCOUNT_BY_ID: `${API_BASE_URL}/business/`,

    PROMOTION: `${API_BASE_URL}/promotion/all?cityId=${cityid}`,
    PROMOTION_CATEGORY: `${API_BASE_URL}/promotion/category?cityId=${cityid}&isServices=false&isInfo=false`,

    PROMOTION_BY_ID: `${API_BASE_URL}/promotion/`,
    SERVICE: `${API_BASE_URL}/service/all?cityId=${cityid}`,
    SERVICE_BY_ID: `${API_BASE_URL}/service/`,

    SEARCH_DISCOUNTS: `${API_BASE_URL}/search/discounts?cityId=${cityid}`,
    SEARCH_DISCOUNT_CATEGORY: `${API_BASE_URL}/search/business-category?cityId=${cityid}`,
    SEARCH_PROMOTION_CATEGORY: `${API_BASE_URL}/search/promotion-category?cityId=${cityid}`,
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
