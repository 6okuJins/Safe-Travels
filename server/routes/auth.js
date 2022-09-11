const express = require('express');
const router = express.Router();
const User = require('../models/user');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

let confirmationHash = {};

router.post("/api/authentication", (req, res, next) => {
    console.log('/api/authentication')
    console.log(req.body)

    // generate four digit code and hash it against phone number
    let password = ''
    for (let i = 0; i < 4; i++) {
        password += Math.floor(Math.random() * 9);
    };
    confirmationHash[req.body.phoneNumber] = password

    client.messages
    .create({
        body: `Your verification code for Safe Travels is ${password}. Never share this code with anyone.`,
        from: `${twilioPhoneNumber}`,
        to: `+1${req.body.phoneNumber}`
    })
    .then(message => {
        console.log(message.sid);
        res.status(200).json({success: true});
    });
});

router.post("/api/login", (req, res, next) => {
    console.log('/api/login')
    console.log(req.body)

    if (req.body.confirmationCode === confirmationHash[req.body.phoneNumber]) {
        console.log('password correct')
        const user = new User({
            phone: req.body.phoneNumber,
        }).save(err => {
            if (err) {
                console.log(err)
                return next(err)
            }
            console.log('successfully added phone number to DB')
            res.status(200).json({success: true})
        });
    } else {
        console.log('password incorrect')
        res.status(403).json({success: false})
    }
});


module.exports = router;