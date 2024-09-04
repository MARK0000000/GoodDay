import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import telIcon from '../../images/icons/quick-call.svg.svg';
import timeIcon from '../../images/icons/clock-ok.svg.svg';
import mapMark from '../../images/icons/mapMark.svg';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';

export default function MyMap({ data }) {
    const [activeMap, setActiveMap] = useState(false);
    const [coordinates, setCoordinates] = useState([data.addresses[0].latitude, data.addresses[0].longitude]);
    const [status, setStatus] = useState(getWorkTimeStatus(data.workTimeDetailed));

    const handleRouteClick = () => {
        const [latitude, longitude] = coordinates;
        const url = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=16&l=map&origin=jsapi_2_1_74&um=constructor:YOUR_CONSTRUCTOR_ID`;
        window.open(url, '_blank');
    };

    return (
        <div className='map'>
                <YMaps>
                    <Map
                        defaultState={{ center: coordinates, zoom: 16 }}
                        width="100%" height="600px"
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
                {data.address &&
                    <h3 className="map__title">{data.address}</h3>
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
                                <span className={`widget__item-text ${
                                getWorkTimeStatus(data.workTimeDetailed) === 'Открыто' 
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
    );
}
