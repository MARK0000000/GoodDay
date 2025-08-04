import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchGet, fetchPost } from '../api/fetch';
import {useGeolocation} from '../hooks/useGeolocation'

export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
    const [city, setCity] = useLocalStorage('city', null);
    let cityName
    const [cityLoading, setCityLoading] = useState(true);
    const [cities, setCities] = useLocalStorage('cities', []);
    const [citiesIsLoading, setCitiesIsLoading] = useState(true);
    const { location, error } = useGeolocation();

    useEffect(() => {
        const fetchCities = async () => {
            const result = await fetchGet(`${process.env.REACT_APP_API_BASE_URL}/city/all`);
            if (result) {
                const belarus = result.find(country => country.countryName === "Беларусь");
                if (belarus) {
                    belarus.cities.unshift({ id: 0, name: "Полоцк-Новополоцк" });
                }
                const russia = result.find(country => country.countryName === "Россия");
                if (russia) {
                    const moscowIndex = russia.cities.findIndex(city => city.name === "Москва");
                    if (moscowIndex !== -1) {
                        const moscowCity = russia.cities.splice(moscowIndex, 1)[0];
                        russia.cities.unshift(moscowCity); 
                    }
                }

                setCities(result);
                setCitiesIsLoading(false);
            }
        };

        fetchCities();
    }, []);

    useEffect(() => {
        if (city !== null) {
            setCityLoading(false)
            return;
        }
        if(citiesIsLoading) {
            return
        }
        const getCityByLatAndLon = async ({ lat, lon }) => {
            try {
                const geolocation = await fetchPost({ lat, lon }, `${process.env.REACT_APP_API_BASE_URL}/city/location`);
                const foundCountry = cities.find(country => country.countryName === geolocation.countryName);
                let selectedCityId;
                let foundCity
                if (foundCountry) {
                    foundCity = foundCountry.cities.find(city => city.name === geolocation.cityName);
                    selectedCityId = foundCity ? foundCity.id : foundCountry.cities[0].id;
                }

                if (!foundCountry || !foundCity) {
                    alert("Не удалось найти ваш город. \nВозможно, его нет в нашем списке.\nВы всегда можете выбрать город вручную.");
                    selectedCityId = cities[0].cities[0].id;  
                }

                setCity(selectedCityId);
            } catch (e) {
                console.error('Ошибка при получении города от DaData:', e);
                alert("Не удалось найти ваш город. \nВозможно, его нет в нашем списке.\nВы всегда можете выбрать город вручную.");
                setCity(cities[0].cities[0].id);
            } finally {
                setCityLoading(false);
            }
        };

        if (location.lat && location.lon) {
            getCityByLatAndLon(location);
        } else if (error) {
            console.error('Ошибка при получении координат', error);
            alert("Не удалось найти ваш город. \nВозможно, его нет в нашем списке.\nВы всегда можете выбрать город вручную.");
            setCity(cities[0].cities[0].id);
            setCityLoading(false);
        }
    }, [location, error, citiesIsLoading]);

    const updateCity = (cityId) => {
        setCity(cityId);
        setCityLoading(false);
    };

    const findCityName = (cityId) => {
        for (const country of cities) {
            const foundCity = country.cities.find(city => city.id === cityId);
            if (foundCity) {
                return foundCity.name;
            }
        }
        return '';
    };
    if (!citiesIsLoading) {
        cityName = findCityName(city)
    }

    return (
        <CityContext.Provider value={{ city, updateCity, cities, cityName, cityLoading }}>
            {children}
        </CityContext.Provider>
    );
};
