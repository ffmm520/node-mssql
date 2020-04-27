var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {
    server: '192.168.0.1',
    authentication: {
        type: 'default',
        options: {
            userName: 'hydee', // update me
            password: 'hydee' // update me
        }
    },
    options: {
        database: 'hdwebquery',
        encrypt: false
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
login = async (callback) => {
    const sql = `select userid, username, userpass, userflag, lasttime  from u_user where userid ='V34900'`
    request = new Request(sql, (err, rowCount, rows) => {
        if (err) {
            callback(err);
        } else {
            console.log(rowCount + ' row(s) inserted');
            callback(null);
        }
    })

    // Print the rows read
    var result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });

    connection.execSql(request)
}
login()