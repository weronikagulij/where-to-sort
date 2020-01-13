const getLatLongDiff = (lat, long, range) => {
    lat = parseFloat(lat);
    long = parseFloat(long);
    range = parseFloat(range);

    const earth = 6378.137,
        pi = Math.PI,
        cos = Math.cos,
        m = 1 / (((2 * pi) / 360) * earth) / 1000;

    const lat_diff = range * m;
    const long_diff = (range * m) / cos(long * (pi / 180));

    return {
        lat: lat,
        long: long,
        range: range,
        lat_diff: lat_diff,
        long_diff: long_diff
    };
};

module.exports = getLatLongDiff;
