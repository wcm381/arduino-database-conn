// Load Modules
var http = require('http'),
    net = require('net'),
    url = require('url'),
    fs = require('fs'),
    io = require('socket.io'),
    server;

var mysql      = require('mysql2');

// HTTP Port Number for HTTP Server
var HTTP_PORT = 8080;



// Configure Connection and Connect to SQL Database
var connection = mysql.createConnection({
	host     : 'dbinstancesql.c7tazdmnvenv.us-east-1.rds.amazonaws.com;dbname=mydbSQL1',
	user     : 'userWill',
	password : 'xxxxxxxx',
	port 	   : '3306'
});


// 




