export default function getAddress(data) {
    let address;

    if (data?.addresses && data.addresses.length > 0 && data.addresses[0].description) {
        address = data.addresses[0].description;
    } else if (data?.address) {
        address = typeof data.address === 'string' ? data.address : data.address.description;
    } 

    return address;
}
