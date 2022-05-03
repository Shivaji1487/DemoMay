const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'may2'
});
connection.connect((err) => {
    (err)?console.log("unable to create connection with db"):console.log("connection established")  
});

module.exports = connection;