import React, { useState } from 'react';
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
import { extractFirstWebLink } from '../../utils/workWithSocialLinks';
import { removeLeadingSymbols } from '../../utils/workWithSocialLinks';
import { removeAtSymbol } from '../../utils/workWithSocialLinks';
export default function ContactsWidget({ business, status }) {

    const firstWebLink = extractFirstWebLink(business.webLinks);

    const [coordinates] = useState(business.addresses ? [(business.addresses[0] && business.addresses[0].latitude) || false, (business.addresses[0] && business.addresses[0].longitude) || false] : [(business.address && business.address.latitude) || false, (business.address && business.address.longitude) || false]);

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
            {((typeof business.address === 'string' ? business.address : business.address.description) || business.workTime || (business.phones && business.phones.length > 0) || business.phone || business.telegramLink || business.instagramLink || business.email || business.vkLink || firstWebLink || business.webLink) &&
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
                                    {!condition &&
                                        <Link className='widget__item-text_linkOnMap' to="map" smooth={true}>
                                            Показать
                                        </Link>
                                    }
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
                                        <span className={`widget__item-text ${getWorkTimeStatus(business.workTimeDetailed) === 'Открыто'
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