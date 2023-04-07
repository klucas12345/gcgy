import IRC from 'irc-server';

const server = IRC.createServer();

server.listen(6667);