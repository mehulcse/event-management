const objectEncode = object => {
    const str = [];
    Object.keys(object).forEach(key => {
        str.push(`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`);
    });
    return str.join('&');
};

export default objectEncode;
