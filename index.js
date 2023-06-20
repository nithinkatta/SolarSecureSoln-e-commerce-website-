
// How to run the Application?
// s1: run node index.js to start server in the terminal
// s2: go to localhost:8080 in the browser to see the result
// continue at 20th video of solar secure solutions videos to connect with the database




var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var mysql = require('mysql');
var session = require('express-session');

mysql.createConnection({
    host: "localhost",
    user:"phpmyadmin",
    password:"PassWord123",
    database:"node_project"
});


var app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.listen(8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:"secret"}));

app.get('/', function(req, res) {
    // res.send('Hello world');
    var con = mysql.createConnection({
        host: "localhost",
        user:"phpmyadmin",
        password:"PassWord123",
        database:"node_project"
    });

    con.query("SELECT * FROM products",(err,result)=>{
        res.render('pages/index',{result:result});
    });
    // res.render('pages/index');
});