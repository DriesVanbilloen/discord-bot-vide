const MessageStrategyManager = require('./MessageStrategyManager');
const { handleSpotify } = require('./handlers/spotify/SpotifyMessageHandler');

exports.initiateMessageHanlders = () => {
  const messageManager = new MessageStrategyManager();
  messageManager.addStrategy('spotify', function(message) {
    handleSpotify(message);
  });

  messageManager.addStrategy('poll', function() {
  });

  return messageManager;
}
