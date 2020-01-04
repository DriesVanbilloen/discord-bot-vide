class MessageStrategyManager {
  constructor() {
    this._strategies = [];
  }

  addStrategy(strategy, handler) {
    this._strategies = [...this._strategies, new Strategy(strategy, handler)];
  }

  getStrategy(name) {
    return this._strategies.find(strategy => strategy._name === name);
  }
}

class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doAction(message) {
    this._handler(message);
  }
}

module.exports = MessageStrategyManager;
