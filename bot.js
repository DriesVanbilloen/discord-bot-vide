const Discord = require('discord.js');
const MessageValidator = require('./utils/message-validator');
import { initiateMessageHanlders } from './commands/MessageInitiator';

const client = new Discord.Client();
const auth = require('./auth/auth.json');
const messageInitiator = new MessageInitiator();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  initiateMessageHanlders();
});

client.on('message', msg => {
  var messageArray = msg.split(' ');
  var prefix = messageArray[0];

  if (MessageValidator.isPrefix(prefix)) {
    if (messageArray.length < 2) {

    }
  }

  //// TODO: Message handlers
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(auth.token);
