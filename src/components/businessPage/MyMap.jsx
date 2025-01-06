import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import telIcon from '../../images/icons/quick-call.svg.svg';
import timeIcon from '../../images/icons/clock-ok.svg.svg';
import mapMark from '../../images/icons/mapMark.svg';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';

export default function MyMap({ data }) {

    const [coordinates] = useState([(data.addresses[0] && data.addresses[0].latitude) || false, (data.addresses[0] && data.addresses[0].longitude) || false]);
    const [status] = useState(getWorkTimeStatus(data.workTimeDetailed))
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

    return (
        <>
            {condition ?
                <div></div>
                :
                <div className='map' id='map'>
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
                        {(data.addresses[0]) &&
                            <h3 className="map__title">{data.addresses[0].description}</h3>
                        }
                        <div className="map__btnBox">
                            <button className="map__button" onClick={handleRouteClick}>Проложить маршрут</button>
                        </div>
                        {(data.phone || data.workTime) &&
                            <hr className="map__hr" />
                        }
                        {data.workTime &&
                            <>
                                <div className="map__item">
                                    <button className="map__item-btn">
                                        <img src={timeIcon} alt="" className="map__item-icon" />
                                    </button>
                                    <p className="map__item-text">
                                        {data.workTime} <br />
                                        <span className={`widget__item-text ${getWorkTimeStatus(data.workTimeDetailed) === 'Открыто'
                                                ? 'widget__item-text_green'
                                                : getWorkTimeStatus(data.workTimeDetailed).includes('Откроется через')
                                                    ? 'widget__item-text_orange'
                                                    : 'widget__item-text_red'
                                            }`}>{status}</span>
                                    </p>
                                </div>
                                <hr className="map__hr" />
                            </>
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