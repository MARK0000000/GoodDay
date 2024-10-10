import React, { useContext, useRef, useEffect } from 'react';
import { CityContext } from '../../../context/City';

export default function CityModal({ active, onClose }) {
    const { updateCity, cities } = useContext(CityContext);
    const modalRef = useRef(null); // Create a ref for the modal

    // Effect to handle clicks outside the modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Call the onClose function when clicking outside
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={`cityModal ${active ? 'cityModal_active' : ''}`} ref={modalRef}>
            <h3 className='cityModal__title'>Выберите свой город</h3>
            <div className="cityModal__content">
                {cities.map(city => (
                    <span 
                        key={city.id} 
                        className="cityModal__item" 
                        onClick={() => {
                            updateCity(city.id);
                            onClose(); // Close modal after selecting a city
                        }}
                    >
                        {city.name}
                    </span>
                ))}
            </div>
        </div>
    );
}