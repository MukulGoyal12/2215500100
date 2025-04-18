const express = require('express');
const router = express.Router();

const fetchNum = require('../services/fetchNum');
const updateWindow = require('../services/windowManager');

router.get('/:type', async (req, res) => {
    const { type } = req.params;

    if (!['p', 'f', 'e', 'r'].includes(type)) {
        return res.status(400).json({ error: "Invalid type" });
    }

    const numbers = await fetchNum(type);
    const final = updateWindow(numbers);

    res.json(final);
});

module.exports = router;
