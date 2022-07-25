const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "ecommv2.cb4unrnnwl4a.us-east-1.rds.amazonaws.com",
    port: "3001",
    user: "admin",
    password: "password1234",
    database: "Ecomm"
})

app.get('/products', (req, res) => {
    db.query('SELECT * FROM Ecommv2.Products', (err,result) => {
        if (err) {
            throw err;
        }
        res.send(result)
    })
});

app.listen(3001, () => {
    console.log('running on port 3001')
})