import React, {useEffect, useState} from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import mapMark from '../../images/icons/mapMark.svg'

export default function MyMapSmall({data}) {

    const [activeMap, setActiveMap] = useState(false);
    // const [coordinates, setCoordinates] = useState([data.addresses[0].latitude, data.addresses[0].longitude]);
    const [coordinates, setCoordinates] = useState([50, 50]);



  return (
    <section className='serviceMap'>
        <h3 className="serviceMap__title">На карте</h3>
        <div className="serviceMap__content">
            <YMaps>
                <Map 
                    defaultState={{ center: coordinates, zoom: 16 }} 
                    width="100%" height="155px"
                    options={{ controls: ['zoomControl'] }}
                >
                    <Placemark 
                        geometry={coordinates} 
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: ``,
                            iconImageSize: [50, 50],
                        }}
                    />
                </Map>
            </YMaps>            
            <button className="serviceMap__button">Открыть карту</button>
        </div>
    </section>
  )
}
