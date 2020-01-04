const validator = require('../../../utils/message-validator');

exports.handleSpotify = (message) => {
    console.log('Spotify handler is called');
    var command = message.content.split(' ')[2];
    if (validator.SpotifyMessageValidator.isSpotifyQueueCommand(command)) {
        showQueue(message);
    }
}

function showQueue(message) {
    message.reply('Here is the simple queue');
}

/* Spotify Commands handlers methods */

