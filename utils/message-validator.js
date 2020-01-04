class StandardMessageValidator {
  static isPrefix(prefix) {
    return prefix === 'vide';
  }
}
/* Spotify Validation helpers */

class SpotifyMessageValidator {
  
  static isSpotifyPlayCommand(command) {
    return command === 'play';
  }

  static isSpotifyPauseCommand(command) {
    return command === 'pause';
  }

  static isSpotifyNextCommand(command) {
    return command === 'next';
  }

  static isSpotifyQueueCommand(command) {
    console.log(command);
    return command === 'queue';
  }

  static isSpotifyClearCommand(command) {
    return command === 'clear';
  }

  static isSpotifyDisconnectCommand(command) {
    return command === 'disconnect';
  }

}

module.exports = {
  StandardMessageValidator,
  SpotifyMessageValidator
}


/* Other Validation helper classes */