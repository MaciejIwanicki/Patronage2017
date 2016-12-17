// start up the server
var server = require("http-server/bin/http-server");

// load the page it is serving
var got = require("got");
(await got.get("http://localhost:8080")).body