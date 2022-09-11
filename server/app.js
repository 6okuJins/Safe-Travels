// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// process.env access
require('dotenv').config()

// route imports
const indexRouter = require('./routes/home');
const userRouter = require('./routes/auth');
const {Admin}=require("mongodb");

// initialize app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes
app.use('/', indexRouter);
app.use('/', userRouter);

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
    console.log('connected to DB')

    app.listen(process.env.PORT, () => {
        console.log(`listening to port ${process.env.PORT}`)
    });
})
.catch(()=> {
    console.log('error connecting to DB')
});