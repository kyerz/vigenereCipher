const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "password";

class VigenereCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc;
  }

  setKey = function (key) {
    this.key = key;
  };

  setDictionary = function (abc) {
    this.abc = abc;
  };

  encode = function (str) {
    let cypher = "";
    let targetIndex = 0;
    for (let i = 0; i < str.length; i++) {
      targetIndex === this.key.length ? (targetIndex = 0) : null;
      if (this.abc.indexOf(str[i]) === -1) {
        cypher += str[i];
        targetIndex++;
        continue;
      }

      const startIndex = this.abc.indexOf(str[i]);
      const target = this.abc.indexOf(this.key[targetIndex]);

      let count = 0;
      for (let letter = startIndex; letter < this.abc.length; letter++) {
        if (count === target) {
          cypher += this.abc[letter];
          break;
        }
        letter === this.abc.length - 1 ? (letter = -1) : null;
        count++;
      }
      targetIndex++;
    }
    return cypher;
  };

  decode = function (str) {
    let decypher = "";
    let keyIndex = 0;
    let matchIndex = 0;
    for (let i = 0; i < str.length; i++) {
      keyIndex > this.key.length - 1 ? (keyIndex = 0) : null;
      if (this.abc.indexOf(str[i]) === -1) {
        decypher += str[i];
        keyIndex++;
        continue;
      }
      const startIndex = this.abc.indexOf(this.key[keyIndex]);
      let targetIndex = this.abc.indexOf(str[i]);

      matchIndex = this.abc.length - (startIndex - targetIndex);
      matchIndex > this.abc.length - 1 ? (matchIndex -= this.abc.length) : null;
      decypher += this.abc[matchIndex];

      keyIndex++;
    }
    return decypher;
  };
}

export default VigenereCipher;
