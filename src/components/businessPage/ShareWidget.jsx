import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import vkIcon from '../../images/icons/social-vk.svg.svg';
import telegramIcon from '../../images/icons/telegram-white.svg.svg';
import viberIcon from '../../images/icons/social-viber.svg.svg';
import okIcon from '../../images/icons/social-ok.svg.svg';
import mailruIcon from '../../images/icons/mailru-white.svg.svg';

export default function ShareWidget() {
    const currentUrl = window.location.href;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                toast.success('Ссылка скопирована в буфер обмена!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                });
            })
            .catch((err) => {
                console.error('Ошибка при копировании ссылки: ', err);
            });
    };

    const handleShare = (selectedIcon) => {
        let shareUrl;
        switch (selectedIcon) {
            case 'vk':
                shareUrl = `https://vk.com/share.php?url=${currentUrl}`;
                break;
            case 'telegram':
                shareUrl = `https://telegram.me/share/url?url=${currentUrl}`;
                break;
            case 'viber':
                shareUrl = `https://www.viber.com/forward?text=${currentUrl}`;
                break;
            case 'ok':
                shareUrl = `https://connect.ok.ru/offer?url=${currentUrl}`;
                break;
            case 'mailru':
                shareUrl = `https://connect.mail.ru/share?url=${currentUrl}`;
                break;
            default:
                return;
        }
        window.open(shareUrl, '_blank');
    };

    return (
        <div className="widget">
            <h4 className="widget__title">Поделиться</h4>
            <div className='widget__shareContainer'>
                <div className="widget__item widget__item_share">
                    <button
                        className="widget__item-btn widget__item-btn_vk"
                        onClick={() => handleShare('vk')}
                    >
                        <img src={vkIcon} alt="VK" className="widget__item-icon" />
                    </button>
                    <button
                        className="widget__item-btn widget__item-btn_telegram"
                        onClick={() => handleShare('telegram')}
                    >
                        <img src={telegramIcon} alt="Telegram" className="widget__item-icon" />
                    </button>
                    <button
                        className="widget__item-btn widget__item-btn_viber"
                        onClick={() => handleShare('viber')}
                    >
                        <img src={viberIcon} alt="Viber" className="widget__item-icon" />
                    </button>
                    <button
                        className="widget__item-btn widget__item-btn_ok"
                        onClick={() => handleShare('ok')}
                    >
                        <img src={okIcon} alt="OK" className="widget__item-icon" />
                    </button>
                    <button
                        className="widget__item-btn widget__item-btn_mailru"
                        onClick={() => handleShare('mailru')}
                    >
                        <img src={mailruIcon} alt="Mail.ru" className="widget__item-icon" />
                    </button>
                </div>
                <button
                    className="widget__item-btn_big"
                    onClick={handleCopyLink}
                >
                    Скопировать ссылку
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}