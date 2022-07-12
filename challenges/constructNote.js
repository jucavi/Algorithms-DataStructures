function constructNote(message, letters) {
  let messageCounter = {};
  for (let i = 0; i < message.length; i++) {
    messageCounter[message[i]] = messageCounter[message[i]] + 1 || 1;
  }
  for (let i = 0; i < letters.length; i++) {
    if (messageCounter[letters[i]]) messageCounter[letters[i]] -= 1;
  }
  for (const letter in messageCounter) {
    if (messageCounter[letter]) return false;
  }
  return true;
}


console.log(constructNote('aa', 'aba'));