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
        case 'telegram':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
            } else {
                url = `https://t.me/${link}`; 
            }
            break;
        case 'serviceLink':
            if (link.startsWith('https://') || link.startsWith('http://')) {
            url = link; 
            } else if (link.startsWith('bumpix.net') || link.startsWith('dikidi.net') || link.startsWith('n')) {
                url = "https://" + link
            }
            else  {
                url = link
            }
            break;
        default:
            return;
    }

    window.open(url, '_blank'); 
}