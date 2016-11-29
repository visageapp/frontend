var express = require('express');
var app = express();

/** Static Files */
app.use('/', express.static(__dirname));

/** This route deals enables HTML5Mode by forwarding missing files to the index.html */
app.get('/*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if ( req.method === 'OPTIONS' ) {
    res.writeHead(200);
    res.end();
    return;
  }
  res.sendFile(__dirname + '/index.html')
});

var port = process.env.PORT || 8000;
var server = app.listen(port, function () {
  console.log('listening on port: %s', port);
});

module.exports = app;
