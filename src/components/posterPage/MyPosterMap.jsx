import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import telIcon from '../../images/icons/quick-call.svg.svg';
import mapMark from '../../images/icons/mapMark.svg';

export default function MyPosterMap({ data }) {
    
    const [coordinates, setCoordinates] = useState([(data.address && data.address.latitude) || false, (data.address && data.address.longitude) || false]);

    const handleRouteClick = () => {
        const [latitude, longitude] = coordinates;
        const url = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=16&l=map&origin=jsapi_2_1_74&um=constructor:YOUR_CONSTRUCTOR_ID`;
        window.open(url, '_blank');
    };
    const areCoordinatesEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
        return true;
      };
    const condition = areCoordinatesEqual(coordinates, [false, false]);
    console.log(coordinates)
    return (
        <>
            {condition  ?
                <div></div>
                :
                <div className='map'>
                        <YMaps>
                            <Map
                                defaultState={{ center: coordinates, zoom: 16 }}
                                width="100%" height="100%"
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
                    <div className="map__content">
                        {(data.address) &&
                            <h3 className="map__title">{data.address.description}</h3>
                        }
                        <div className="map__btnBox">
                            <button className="map__button" onClick={handleRouteClick}>Проложить маршрут</button>
                        </div>
                        {(data.phone) &&
                            <hr className="map__hr" />
                        }
                        {data.phone &&
                            <>
                                <div className="map__item">
                                    <button className="map__item-btn">
                                        <img src={telIcon} alt="" className="map__item-icon" />
                                    </button>
                                    <a className="map__item-text" href={`tel:${data.phone}`}>
                                        {data.phone}
                                    </a>
                                </div>
                                <hr className="map__hr" />
                            </>
                        }
                    </div>
                </div>
            }
        </>
    );
}