const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('message', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);

// 123