// class Trie {
//   constructor() {
//     this.characters = {};
//     this.isWord = false;
//   }
//   addWord(word, index = 0, trie = this) {
//     if (index === word.length) {
//       trie.isWord = true;
//       return;
//     } else {
//       if (!trie.characters[word[index]])
//         trie.characters[word[index]] = new Trie();
//     }
//     this.addWord(word, index + 1, trie.characters[word[index]]);
//     return this;
//   }
// }

class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  // findWord(word, index = 0) {
  //   // This function will return the node in the trie
  //   // which corresponds to the end of the passed in word.

  //   // Be sure to consider what happens if the word is not in this Trie.
  //   var char = word[index];
  //   if (index < word.length - 1 && this.characters[char]) {
  //     index += 1;
  //     return this.characters[char].findWord(word, index);
  //   } else {
  //     return this.characters[char];
  //   }
  // }

  getWords(words = [], currentWord = '') {
    // This function will return all the words which are
    // contained in this Trie.
    // it will use currentWord as a prefix,
    // since a Trie doesn't know about its parents.

    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }
  autoComplete(prefix) {
    // This function will return all completions
    // for a given prefix.
    // It should use find and getWords.
    var subTrie = this.findWords(prefix);
    if (subTrie) {
      return subTrie.getWords([], prefix);
    } else {
      return [];
    }
  }
  removeWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = false;
      return;
    }
    let char = word[index];
    if (char && this.characters[char])
      this.characters[char].removeWord(word, index + 1);
    else return;
    if (
      Object.keys(this.characters[char].characters).length === 0 &&
      !this.characters[char].isWord
    )
      delete this.characters[char];
  }

  findWord(word, index = 0) {
    if (index === word.length) {
      return this;
      // if (this.isWord) return this;
    }
    let char = word[index];
    if (char && this.characters[char])
      return this.characters[char].findWord(word, index + 1);
  }

  getWords(words = [], currentWord = '') {
    if (this.isWord) words.push(currentWord);
    for (const char in this.characters) {
      const iterWord = currentWord + char;
      this.characters[char].getWords(words, iterWord);
    }
    return words;
  }

  autoComplete(prefix) {
    const suffixes = this.findWord(prefix);
    if (!suffixes) return [];
    return suffixes.getWords([], prefix)
  }
}

let t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');

// console.log(t.findWord(''));
// console.log(t.findWord('fat').characters);
// console.log(t.findWord('father').characters);
// console.log(t.findWord('father').isWord);

console.log(t.autoComplete('fat'));
