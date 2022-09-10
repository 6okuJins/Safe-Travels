var express = require('express');
var router = express.Router();

router.post('/api/location', (req, res, next) => {
    console.log(req.body)
    res.json({'stuff': "stuff"})
})

module.exports = router;