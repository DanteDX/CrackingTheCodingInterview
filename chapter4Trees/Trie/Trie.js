/* Time complexity, O(w) for insertion, searching and deletion, where
'w' is the length of the word in consideration

space complexity, O(M * N), where N is the number of words stored in the trie
and M is the length of the longest word inserted in the trie

*/

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      let node = current.children[ch];
      if (node === undefined) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  /* returns true if founds the word, returns false if not found */

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      let node = current.children[ch];
      if (node === undefined) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  }

  delete(word) {
    function deleteRecursively(current, word, index) {
      if (index === word.length) {
        //this is the base case
        if (current.endOfWord === false) {
          return false;
        }
        current.endOfWord = true;
        return Object.keys(current.children).length === 0;
      }
      let ch = word.charAt(index);
      let node = current.children[ch];
      if (node === undefined) {
        return false; // such word has not been defined or substring doesn't exist as well
      }
      let shouldDeleteCurrentNode = deleteRecursively(node, word, index + 1);
      if (shouldDeleteCurrentNode === true) {
        delete current.children[ch];
        return Object.keys(current.children).length === 0;
      }
      return false;
    }
    deleteRecursively(this.root, word, 0);
  }
}

module.exports = Trie;
