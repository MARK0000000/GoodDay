import React, {useState} from 'react'
import vkIcon from '../../images/icons/social-vk.svg.svg'
import telegramIcon from '../../images/icons/telegram-white.svg.svg'
import viberIcon from '../../images/icons/social-viber.svg.svg'
import okIcon from '../../images/icons/social-ok.svg.svg'
import mailruIcon from '../../images/icons/mailru-white.svg.svg'
import { handleShare } from '../../utils/share';

export default function ShareWidget() {

    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

  return (
    <div className="widget">
    <h4 className="widget__title">Поделиться</h4>
    <div className="widget__item">
        <button
            className={`widget__item-btn widget__item-btn_vk ${selectedIcon === 'vk' ? 'widget__item-btn_selected' : ''}`}
            onClick={() => handleIconClick('vk')}
            >
            <a>
                <img src={vkIcon} alt="" className="widget__item-icon" />
            </a>
        </button>
        <button
            className={`widget__item-btn widget__item-btn_telegram ${selectedIcon === 'telegram' ? 'widget__item-btn_selected' : ''}`}
            onClick={() => handleIconClick('telegram')}
            >
            <a>
                <img src={telegramIcon} alt="" className="widget__item-icon" />
            </a>
        </button>
        <button
            className={`widget__item-btn widget__item-btn_viber ${selectedIcon === 'viber' ? 'widget__item-btn_selected' : ''}`}
            onClick={() => handleIconClick('viber')}
            >
            <a>
                <img src={viberIcon} alt="" className="widget__item-icon" />
            </a>
        </button>
        <button
            className={`widget__item-btn widget__item-btn_ok ${selectedIcon === 'ok' ? 'widget__item-btn_selected' : ''}`}
            onClick={() => handleIconClick('ok')}
            >
            <a>
                <img src={okIcon} alt="" className="widget__item-icon" />
            </a>
        </button>
        <button
            className={`widget__item-btn widget__item-btn_mailru ${selectedIcon === 'mailru' ? 'widget__item-btn_selected' : ''}`}
            onClick={() => handleIconClick('mailru')}
            >
            <a>
                <img src={mailruIcon} alt="" className="widget__item-icon" />
            </a>
        </button>
    </div>
    <button
        className="widget__item-btn_big"
        onClick={() => handleShare(selectedIcon)}
    >
        Скопировать ссылку
    </button>
</div>
)
}
