import React, { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
    const [city, setCity] = useLocalStorage('city', 0);
    const [cities, setCities] = useLocalStorage('cities', []);
    
    let selectedCity = cities.find(item => item.id === city);
    let cityName = selectedCity ? selectedCity.name : ''; 

    function updateCity(city) {
        setCity(city);
    }

    const belarusianCities = [
        { id: 0, name: "Полоцк-Новополоцк" },
          {
            "id": 8,
            "name": "Борисов"
          },
          {
            "id": 5,
            "name": "Брест"
          },
          {
            "id": 4,
            "name": "Витебск"
          },
          {
            "id": 7,
            "name": "Гомель"
          },
          {
            "id": 12,
            "name": "Гродно"
          },
          {
            "id": 11,
            "name": "Жодино"
          },
          {
            "id": 3,
            "name": "Интернет-магазин"
          },
          {
            "id": 15,
            "name": "Лида"
          },
          {
            "id": 9,
            "name": "Минск"
          },
          {
            "id": 6,
            "name": "Могилёв"
          },
          {
            "id": 17,
            "name": "Мозырь"
          },
          {
            "id": 2,
            "name": "Новополоцк"
          },
          {
            "id": 10,
            "name": "Пинск"
          },
          {
            "id": 1,
            "name": "Полоцк"
          },
          {
            "id": 14,
            "name": "Слуцк"
          },
          {
            "id": 13,
            "name": "Солигорск"
          }
    ];

    useEffect(() => {
        setCities(belarusianCities);
    }, []);

    return (
        <CityContext.Provider value={{ city, updateCity, cities, cityName }}>
            {children}
        </CityContext.Provider>
    );
}