export const extractFirstWebLink = (webLinks) => {
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


export const removeLeadingSymbols = (str) => {
    return str ? str.replace(/^==>\s*/, '') : str;
};

export const removeAtSymbol = (link) => {
    return link ? link.replace(/^@/, '') : link;
};
