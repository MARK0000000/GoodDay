export const handleNavigateSocial = (typeOfLink, link) => {
    let url;
    switch (typeOfLink) {
        case 'vk':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
            } else {
                url = `https://vk.com/${link}`; 
            }
            break;
        case 'web':
            if (link.startsWith('https://')) {
                url = link; 
            } else {
                url = `https://${link}`; 
            }
            break; 
        case 'instagram':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
            } else {
                url = `https://instagram.com/${link}`; 
            }
            break;
        case 'serviceLink':
            url = link; 
            break;
        default:
            return;
    }

    window.open(url, '_blank'); 
}