import { dictionary, key } from "./mock.js";
import VigenereCipher from "./VigenereCipher.js";

const inputAlphabet = document.querySelector("#alphabet");
const inputKey = document.querySelector("#encryptKey");
const msgToEncrypt = document.querySelector("#clearMsg");
const msgToDecipher = document.querySelector("#encryptMsg");
const cipherBtn = document.querySelector(".cipherBtn");

inputAlphabet.value = dictionary;
inputKey.value = key;

cipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const encryptionAlgorithm = new VigenereCipher(
    inputKey.value,
    inputAlphabet.value
  );
  const encryptedMsg = encryptionAlgorithm.encode(msgToEncrypt.value);
  msgToDecipher.value = encryptedMsg;
});
