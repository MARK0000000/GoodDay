import React from 'react';
import { Fancybox } from '@fancyapps/ui';

export default function CityModal({ cities, updateCity }) {

    const handleClose = () => {
        Fancybox.close();
    };

    return (
        <div className='cityModal'>
            <button className="cityModal__close" onClick={handleClose} aria-label="Close">
                &times;
            </button>

            <h3 className='cityModal__title'>Выберите свой город</h3>

            {cities.map(country => (
                <div key={country.countryName}>
                    <h4 className='cityModal__title cityModal__title_country'>{country.countryName}</h4>
                    <div className="cityModal__content">
                        {country.cities
                            .slice() 
                            .sort((a, b) => a.name.localeCompare(b.name)) 
                            .map(city => (
                                <span
                                    key={city.id}
                                    className="cityModal__item"
                                    onClick={() => {
                                        updateCity(city.id);
                                        handleClose();
                                    }}
                                >
                                    {city.name}
                                </span>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
