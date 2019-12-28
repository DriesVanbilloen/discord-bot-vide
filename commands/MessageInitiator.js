const MessageStrategyManager = require('./MessageStrategyManager');

exports.initiateMessageHanlders = () => {
  const messageManager = new MessageStrategyManager();
  messageManager.addStrategy('spotify', function() { console.log('Open Spotify functions')});
  messageManager.addStrategy('poll', console.log('Open Poll function'));
  return messageManager;
}
