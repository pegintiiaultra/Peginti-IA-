const express = require('express');
const { RocketChat } = require('@rocket.chat/sdk-node');
const app = express();
const rocketChat = new RocketChat({
  host: 'https://chat.peginti.e-monsite.com/',
  port: 443,
  ssl: true,
  protocol: 'https',
});
app.use(express.json());
app.post('/api/messages', async (req, res) => {
  const { message } = req.body;
  await rocketChat.sendMessage(message);
  res.send('Message envoyé avec succès');
});
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
