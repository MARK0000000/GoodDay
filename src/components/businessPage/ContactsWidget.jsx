import React from 'react';
import addressIcon from '../../images/icons/share-map.svg.svg';
import timeIcon from '../../images/icons/clock-ok.svg.svg';
import telIcon from '../../images/icons/quick-call.svg.svg';
import internetIcon from '../../images/icons/quick-globe.svg.svg';
import vkIcon from '../../images/icons/vkGrey.svg';
import telegramIcon from '../../images/icons/telegramGrey.svg';
import instaIcon from '../../images/icons/instaGray.svg';
import emailIcon from '../../images/icons/emailGrey.svg';
import { handleNavigateSocial } from '../../utils/navigateSocial';
import { Link } from 'react-scroll';
import { getWorkTimeStatus } from '../../utils/workTimeDetailed';

export default function ContactsWidget({ business, status }) {

    const extractFirstWebLink = (webLinks) => {
        if (!webLinks || webLinks.length === 0) return null; 

        let linksArray;
        try {
            linksArray = JSON.parse(webLinks); 
        } catch (error) {
            console.error("Invalid JSON format:", error);
            return null;
        }

        if (!Array.isArray(linksArray) || linksArray.length === 0) return null; 

        const firstLink = linksArray[0].replace(/^==>\s*/, ''); 
        return firstLink;
    };

    const firstWebLink = extractFirstWebLink(business.webLinks);

    const removeLeadingSymbols = (str) => {
        return str ? str.replace(/^==>\s*/, '') : str;
    };

    const removeAtSymbol = (link) => {
        return link ? link.replace(/^@/, '') : link;
    };

    return (
        <>
        {((typeof business.address === 'string' ? business.address : business.address.description) || business.workTime || (business.phones && business.phones.length > 0)|| business.phone || business.telegramLink || business.instagramLink || business.email || business.vkLink || firstWebLink || business.webLink) &&
        <>
        <div className="widget widget_contact">
            <h4 className="widget__title">Контакты</h4>
            {(typeof business.address === 'string' ? business.address : business.address.description) && 
                <div className="widget__item widget__item_address widget__item_border">
                    <button className="widget__item-btn">
                        <img src={addressIcon} alt="" className="widget__item-icon" />
                    </button>
                    <p className="widget__item-text">
                        {(typeof business.address === 'string' ? business.address : business.address.description)}
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
                        {business.workTimeDetailed.length > 0 &&
                            <span className={`widget__item-text ${
                            getWorkTimeStatus(business.workTimeDetailed) === 'Открыто' 
                                ? 'widget__item-text_green' 
                                : getWorkTimeStatus(business.workTimeDetailed).includes('Откроется через') 
                                    ? 'widget__item-text_orange' 
                                    : 'widget__item-text_red'
                            }`}>{status}</span>
                        }
                    </p>
                </div>
            }

            {(business.phones && business.phones.length) > 0 ?
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={telIcon} alt="" className="widget__item-icon" />
                    </button>
                    <a className="widget__item-text" href={`tel:${removeLeadingSymbols(business.phones[0].phone)}`}>
                        {removeLeadingSymbols(business.phones[0].phone)}
                    </a>
                </div>
                :
                (
                business.phone &&
                    <div className="widget__item widget__item_border">
                        <button className="widget__item-btn">
                            <img src={telIcon} alt="" className="widget__item-icon" />
                        </button>
                        <a className="widget__item-text" href={`tel:${removeLeadingSymbols(business.phone)}`}>
                            {removeLeadingSymbols(business.phone)}
                        </a>
                    </div>
                )
            }
            {business.telegramLink &&
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={telegramIcon} alt="" className="widget__item-icon" />           
                    </button>
                    <div className="widget__item-text_big">
                        <p className="widget__item-text widget__item-text_green">
                            <a href={handleNavigateSocial('telegram', removeAtSymbol(business.telegramLink))} target='_blank' rel='noreferrer'>
                                {removeAtSymbol(business.telegramLink)}
                            </a>
                        </p>
                    </div> 
                </div>
            }

            {business.instagramLink &&
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={instaIcon} alt="" className="widget__item-icon" />           
                    </button>
                    <div className="widget__item-text_big">
                        <p className="widget__item-text widget__item-text_green">
                            <a href={handleNavigateSocial('instagram', removeAtSymbol(business.instagramLink))} target='_blank' rel='noreferrer'>
                                {removeAtSymbol(business.instagramLink)}
                            </a>
                        </p>
                    </div> 
                </div>
            }

            {business.vkLink &&
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={vkIcon} alt="" className="widget__item-icon" />           
                    </button>
                    <div className="widget__item-text_big">
                        <p className="widget__item-text widget__item-text_green">
                            <a href={handleNavigateSocial('vk', removeAtSymbol(business.vkLink))} target='_blank' rel='noreferrer'>
                                {removeAtSymbol(business.vkLink)}
                            </a>
                        </p>
                    </div> 
                </div>
            }
            {business.email &&
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={emailIcon} alt="" className="widget__item-icon" />           
                    </button>
                    <div className="widget__item-text_big">
                        <p className="widget__item-text widget__item-text_green">
                            <a href={`mailto:${business.email}`}>{business.email}</a>
                        </p>
                    </div> 
                </div>
            }

            {firstWebLink ?
                <div className="widget__item widget__item_border">
                    <button className="widget__item-btn">
                        <img src={internetIcon} alt="" className="widget__item-icon" />           
                    </button>
                    <div className="widget__item-text_big">
                        <p className="widget__item-text">
                            <a href={handleNavigateSocial('web', removeAtSymbol(firstWebLink))} target='_blank' rel='noreferrer'>{firstWebLink}</a>
                        </p>
                    </div> 
                </div>
                :
                (
                    business.webLink &&
                    <div className="widget__item widget__item_border">
                        <button className="widget__item-btn">
                            <img src={internetIcon} alt="" className="widget__item-icon" />           
                        </button>
                        <div className="widget__item-text_big">
                            <p className="widget__item-text">
                                <a href={handleNavigateSocial('web', removeAtSymbol(business.webLink))} target='_blank' rel='noreferrer'>{business.webLink}</a>
                            </p>
                        </div> 
                    </div>
                )
            }
        </div>
        </>
        }
        </>
    );
}