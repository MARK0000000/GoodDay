export const handleNavigateSocial = (typeOfLink, link) => {
    let url;
    switch (typeOfLink) {
        case 'vk':
            url = `https://vk.com/${link}`;
            break;
        case 'web':
            url = `https://${link}`;
            console.log(url);
            break; // Add this break statement
        default:
            return;
    }

    window.open(url, '_blank');
};
