import React, {useState} from 'react'
import addressIcon from '../../images/icons/share-map.svg.svg'
import timeIcon from '../../images/icons/clock-ok.svg.svg'
import telIcon from '../../images/icons/quick-call.svg.svg'
import internetIcon from '../../images/icons/quick-globe.svg.svg'
import { handleNavigateSocial } from '../../utils/navigateSocial';
import { Link, animateScroll as scroll } from 'react-scroll';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';

export default function ContactsWidget({business, status}) {

  return (
    <>
    {(business.address || business.workTime || business.phone || (business.webLink || business.vkLink)) &&
    <>
    <div className="widget">
        <h4 className="widget__title">Контакты</h4>
        {business.address && 
            <div className="widget__item widget__item_address widget__item_border">
                <button className="widget__item-btn">
                    <img src={addressIcon} alt="" className="widget__item-icon" />
                </button>
                <p className="widget__item-text">
                    {business.address}
                    <Link className='widget__item-text_linkOnMap' to="map" smooth={true}>
                        Показать
                    </Link>
                </p>
            </div>
        }
        {business.workTime && 
            <div className="widget__item widget__item_border">
                <button className="widget__item-btn">
                    <img src={timeIcon} alt="" className="widget__item-icon" />
                </button>
                <p className="widget__item-text">
                    {business.workTime} <br />
                    <span className={`widget__item-text ${
                    getWorkTimeStatus(business.workTimeDetailed) === 'Открыто' 
                        ? 'widget__item-text_green' 
                        : getWorkTimeStatus(business.workTimeDetailed).includes('Откроется через') 
                            ? 'widget__item-text_orange' 
                            : 'widget__item-text_red'
                    }`}>{status}</span>
                </p>
            </div>
        }
        {business.phone && 
            <div className="widget__item widget__item_border">
                <button className="widget__item-btn">
                    <img src={telIcon} alt="" className="widget__item-icon" />
                </button>
                <a className="widget__item-text" href={`tel:${business.phone}`}>
                    {business.phone}
                </a>
            </div>
        }
        {(business.webLink || business.vkLink) &&
            <div className="widget__item widget__item_big">
                <button className="widget__item-btn">
                    <img src={internetIcon} alt="" className="widget__item-icon" />           
                </button>
                <div className="widget__item-text_big">
                    {business.webLink &&
                        <p className="widget__item-text widget__item-text_green">
                            Сайт <br />
                            <a onClick={() => handleNavigateSocial('web', `${business.webLink}`)}>{business.webLink}</a>
                        </p>
                    }
                    {business.vkLink && 
                        <p className="widget__item-text widget__item-text_green">
                            Страница ВКонтакте <br />
                            <a onClick={() => handleNavigateSocial('vk', `${business.vkLink}`)}>{business.vkLink}</a>
                        </p>
                    }
                </div> 
            </div>
        }
    </div>
    <div style={{height: "30px"}}></div>
    </>
    }
    </>
  )
}
