const { ENDPOINTS, TIMEOUT_MS, WINDOW_SIZE } = require('../config');
const axios = require('axios');

const fetchNum = async (type) => {
    const url = ENDPOINTS[type];

    if (!url) {
        throw new Error("Invalid type");
    }

    try {
        const response = await axios.get(url, { timeout: TIMEOUT_MS });
        return response.data.numbers || [];
    } catch (err) {
        return [];
    }
    
};

module.exports = fetchNum;
