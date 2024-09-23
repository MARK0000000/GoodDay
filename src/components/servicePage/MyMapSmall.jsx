import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import mapMark from '../../images/icons/mapMark.svg';

export default function MyMapSmall({ data }) {
    // Проверяем наличие адресов
    const hasAddresses = data && data.addresses && data.addresses.length > 0;

    // Устанавливаем координаты только если адреса есть
    const coordinates = hasAddresses ? [
        data.addresses[0].latitude,
        data.addresses[0].longitude
    ] : null; // Если адресов нет, координаты будут null

    // Проверяем наличие координат
    const hasCoordinates = coordinates !== null;
    return (
        <>
            {hasCoordinates && (
                <section className='serviceMap'>
                    <h3 className="serviceMap__title">На карте</h3>
                    <div className="serviceMap__content">
                        <YMaps>
                            <Map 
                                defaultState={{ center: coordinates, zoom: 16 }} 
                                width="auto" height="100%"
                                options={{ controls: ['zoomControl'] }}
                            >
                                <Placemark 
                                    geometry={coordinates} 
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: `${mapMark}`,
                                        iconImageSize: [50, 50],
                                    }}
                                />
                            </Map>
                        </YMaps>
                        <div className="serviceMap__btnBox">
                            <button className="serviceMap__button" onClick={() => {
                                const [latitude, longitude] = coordinates;
                                const url = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=16&l=map&origin=jsapi_2_1_74&um=constructor:YOUR_CONSTRUCTOR_ID`;
                                window.open(url, '_blank');
                            }}>Проложить маршрут</button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}