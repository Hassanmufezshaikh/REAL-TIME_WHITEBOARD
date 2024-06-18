const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(bodyParser.json());

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // you can use any email service
  auth: {
    user: 'hassanmufezshaikh@gmail.com', // your email
    pass: 'deesoqdqtlwacjwq', // your email password
  },
});

app.post('/send-invite', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'hassanmufezshaikh@gmail.com',
    to: email,
    subject: 'Invitation',
    text: "You are cordially invited to join and collaborate on a real-time whiteboard! This is an excellent opportunity to engage with others and work together seamlessly in real time. Don't miss out on this chance to be part of an innovative and collaborative experience."
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Invitation sent!');
  });
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('drawing', (data) => {
    socket.broadcast.emit('drawing', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
