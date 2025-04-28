// web sockets implementation -- 

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

// in web rtc a website is connected to another website and shares the packet between them ulike the web socket server where all the 
// websites are connected to a single server and the server emits the data to all the connected browsers


// in webrtc both the websites are connected to each other using ip adress and open port 
// each website register or goes to the stun server and gets its own ip adress and port and then it is given to 
// the websocket server which emits it to the other device(browser) connected to it 
// so for example my pc ip and port are x and y and someone wants to connect so i would say hey send a connection request
// to this if you want to connect with and the other people/browsers would know as it would be emmited via a websocket 
// server 

// local description and remote description 
// for example ramesh wants to stream something he will broadcast or emit his ip adress and port 
// so it is rameshs local description which has to be also set as remote description of other browser if they want to 
// connect and ramesh has to set the other browsers local desc as his remote desc 

// user a -- ip A and port A are local description  remote decription for user b -- ip B and port B
// user b -- ip B and port B are local description remote description for user b -- ip A and port A