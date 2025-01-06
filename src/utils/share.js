const currentUrl = window.location.href;

export const handleShare = (selectedIcon) => {
    if (selectedIcon) {
        let shareUrl;
        switch (selectedIcon) {
            case 'vk':
                shareUrl = `https://vk.com/share.php?url=${currentUrl}`;
                break;
            case 'telegram':
                shareUrl = `https://telegram.me/share/url?url=${currentUrl}`;
                break;
            case 'viber':
                shareUrl = `viber://forward?text=${currentUrl}`;
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
    }
};
