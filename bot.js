const Discord = require('discord.js');
const validator = require('./utils/message-validator');
const { initiateMessageHanlders } = require('./commands/MessageInitiator');

const client = new Discord.Client();
const auth = require('./auth/auth.json');
const messageHandlers = initiateMessageHanlders();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var messageArray = msg.content.split(' ');
  var prefix = messageArray[0];

  if (validator.StandardMessageValidator.isPrefix(prefix)) {
    if (messageArray.length > 1) {;
      var handler = messageHandlers.getStrategy(messageArray[1]);
      handler.doAction(msg);
    } else {
      msg.reply("Please make sure to have a valid command for me! \n >>> These are my commands: \n 1. spotify: to control the spotify feature");
    }
  }
});

client.login(auth.token);
