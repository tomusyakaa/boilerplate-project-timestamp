const express = require('express');
const router = express.Router();

router.get('/:date?', function (req, res, next) {
    if (req.params.date === undefined) {
        req.params.date = Date.now();
    }

    let date = new Date(req.params.date);
    if (isNaN(date.getTime())) {
        date = new Date(req.params.date * 1000);
    }

    if(isNaN(date.getTime())) {
        res.json({ error : "Invalid Date" });
    }

    let unix = Math.floor(date.getTime() / 1000)
    let utc = date.toUTCString();

    res.json({unix: unix, utc: utc});
});

module.exports = router;