import React, {useEffect, useState} from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import telIcon from '../../images/icons/quick-call.svg.svg'
import timeIcon from '../../images/icons/clock-ok.svg.svg'
import mapMark from '../../images/icons/mapMark.svg'
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';

export default function MyMap({data}) {

    const [activeMap, setActiveMap] = useState(false);
    const [coordinates, setCoordinates] = useState([data.addresses[0].latitude, data.addresses[0].longitude]);
    const [status, setStatus] = useState(getWorkTimeStatus(data.workTimeDetailed));


  return (
    <div className={`map ${activeMap && "map_active"}`}>
        <div className='map_blur'>
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
        </div>
        <div className="map__content">
            <h3 className="map__title">{data.address}</h3>
            <div className="map__btnBox">
                <button className="map__button" onClick={() => setActiveMap(true)}>Проложить маршрут</button>
            </div>
            <hr className="map__hr" />
            {data.workTime && 
            <>
                <div className="map__item">
                    <button className="map__item-btn">
                        <img src={timeIcon} alt="" className="map__item-icon" />
                    </button>
                    <p className="map__item-text">
                    {data.workTime} <br />
                        <span className='map__item-text_green'>{status}</span>
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
  )
}
