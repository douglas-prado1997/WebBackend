const mysql = require('mysql2/promise')
require('dotenv').config();

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'pizzaria'
});

module.exports = connection;