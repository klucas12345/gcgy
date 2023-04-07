const IRC = require('irc-server');

const server = IRC.createServer();

console.log(server.listen(6667));

