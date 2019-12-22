class MessageStrategyManager {
  constructor() {
    this._strategies = [];
  }

  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy];
  }

  getStrategy(name) {
    return this.__strategies.find(strategy => strategy._name === name);
  }
}

class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doAction() {
    this._handler();
  }
}

module.exports = MessageStrategyManager;
