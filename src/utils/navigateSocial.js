export const handleNavigateSocial = (typeOfLink, link) => {
    let url;
    switch (typeOfLink) {
        case 'vk':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
                return url;
            } else {
                url = `https://vk.com/${link}`; 
                return url;
            }
        case 'web':
            if (link.startsWith('https://')) {
                url = link; 
                return url;
            } else {
                url = `https://${link}`; 
                return url;
            }
        case 'instagram':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
                return url;
            } else {
                url = `https://instagram.com/${link}`; 
                return url;
            }
        case 'telegram':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
                return url;
            } else {
                url = `https://t.me/${link}`; 
                return url;
            }
        case 'serviceLink':
            if (link.startsWith('https://') || link.startsWith('http://')) {
                url = link; 
                return url;
            } else if (link.startsWith('bumpix.net') || link.startsWith('dikidi.net') || link.startsWith('n')) {
                url = "https://" + link
                return url;
            }
            else  {
                url = link
                return url;
            }
        default:
            return;
    }
}