const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    // host: "ecommv2.cb4unrnnwl4a.us-east-1.rds.amazonaws.com",
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password1234",
    database: "guidedInquiry"
})


app.listen(3001, () => {
    console.log('running on port 3001')
})