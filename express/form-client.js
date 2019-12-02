const http = require('http');

var data = {
    username: 'foo',
    password: "test"
};

var postData = require('querystring').stringify(data);
console.log( postData );

function form()
{
    var options = {
        method: "POST",
        host: "localhost",
        port: 9090,
        path: "/form",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Content-Length": postData.length
        }
    };

    var body = '';
    var request = http.request( options, function(res) {
        // show results  
        console.log('STATUS: ' + res.statusCode);
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            body += chunk;
            console.log('BODY: ' + chunk);
        });

        res.on('end', function(err) {
            console.log( ' complete.');
        });
    });
    request.on("error", function(e) {
        console.log('upload Error: ' + e.message);
    })

    request.write( postData );
    request.end();
}

form();
