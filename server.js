var http = require('http');
var fs = require('fs');
var requestListener = function (req, res) {
  fs.readFile(__dirname + req.url, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
  res.writeHead(200);
  res.end(data);
  });
};

var server = http.createServer(requestListener);
server.listen(3000);


