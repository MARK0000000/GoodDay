import { useState, useEffect } from "react";

export const useGeolocation = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCurrentGeolocation = () => {
            return new Promise((resolve) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        resolve({ lat, lon });
                    }, (error) => {
                        setError(error);
                        resolve({ lat: null, lon: null });
                    });
                } else {
                    resolve({ lat: null, lon: null });
                }
            });
        };

        const fetchLocation = async () => {
            const coords = await getCurrentGeolocation();
            if (coords.lat && coords.lon) {
                setLocation(coords);
            } else {
                setError('Не удалось получить координаты.');
            }
        };

        fetchLocation();
    }, []);

    return { location, error };
};
