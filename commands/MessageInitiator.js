const MessageStrategyManager = require('./MessageStrategyManager');

export function initiateMessageHanlders() {
  const messageManager = new MessageStrategyManager();
  messageManager.addStrategy('spotify', console.log('Open Spotify static handler method'));
  messageManager.addStrategy('poll', console.log('Open Poll function'));
}
