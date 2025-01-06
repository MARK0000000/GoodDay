export const filterBusinesses = (businesses, searchValue) => {
    if (searchValue.trim() === '') return businesses;

    const lowerCaseSearchValue = searchValue.toLowerCase();
    return businesses.filter((item) => {
        const name = item.name.toLowerCase();
        const keywords = item.keywords ? item.keywords.toLowerCase().split(',').map(keyword => keyword.trim()) : [];
        return name.includes(lowerCaseSearchValue) || keywords.some(keyword => keyword.includes(lowerCaseSearchValue));
    });
};
