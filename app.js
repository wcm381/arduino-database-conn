// Just testing creating a table, inserting to it and getting values from it


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



// Configure Connection to SQL Database
var connection = mysql.createConnection({
	host     : 'xxxxxxx',
	user     : 'xxxxxxx',
	password : 'xxxxxxxx',
	port 	   : '3306'
});


// Connect to SQL Database
connection.connect(function(err) {
  console.log("ERROR: " + err.message);
  throw err;
});

// Don't need connection.query('USE' ...  ?

// Create Table
connection.query( 'CREATE TABLE IF NOT EXISTS sampleTbl (' +
		'P_Id  INT	 NOT NULL AUTO_INCREMENT,'  +
		'Time  DATETIME  NOT NULL,'  +
		'Temp  FLOAT	 NOT NULL,'  +
		'PRIMARY KEY(P_Id)'	     +
		')', function( err ){
    			if ( err )  {
    				console.log("ERROR: " + err.message);	
    				throw err;
    			}
    			console.log( 'Table created.' );
		});
		
					
// Insert to Table

var sampleSet = { Time: '2014-07-17 23:16:00', Temp: 23.1 };

connection.query( 'INSERT INTO sampleTbl SET ?', sampleSet, function(err, result) {
	if ( err ) {
		console.log("ERROR: " + err.message);	
		throw err;
	}
	console.log(results);
});

		

					
// Check Table for Row I just put In					
client.query('SELECT * FROM sampleTbl', function (err, rows, result) {
	if ( err )  throw err;
	for (var i in rows) {
		console.log('Temp Values: ', rows[i].Temp);	
	}

// End Connection to Database
connection.end();			
					
					
					
					
