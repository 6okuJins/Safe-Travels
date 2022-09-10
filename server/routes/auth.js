const express = require('express');
const router = express.Router();
const User = require('../models/user');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

let password = '';

router.post("/api/authentication", (req, res, next) => {
    for (let i = 0; i < 4; i++) {
        password += Math.floor(Math.random() * 9);
    };

    client.messages
    .create({
        body: `Your verification code for Safe Travels is ${password}. Never share this code with anyone.`,
        from: '+18155510832',
        to: req.query.phone
    })
    .then(message => {
        console.log(message.sid);
        res.status(200).json({success: true});
    });
});

router.post("/api/login", (req, res, next) => {

    console.log(req.query)

    if (req.query.password === password) {
        const user = new User({
            phone: req.query.phone,
        }).save(err => {
            if (err) {
                console.log(err)
                return next(err)
            }
            // console.log('successfully added to DB?')
            res.status(200).json({success: true})
        });
    } else {
        console.log('password incorrect')
        res.status(403).json({success: false})
    }
});


module.exports = router;