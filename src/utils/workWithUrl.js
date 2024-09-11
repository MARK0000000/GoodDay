export function getEndpoint(location) {
    let path
    const pathname = location.pathname;
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];
    path = lastPart
    return path;

}