import { dictionary, key } from "./mock.js";

const inputAlphabet = document.querySelector("#alphabet");
inputAlphabet.value = dictionary;

const inputKey = document.querySelector("#encryptKey");
inputKey.value = key;

const msgToEncrypt = document.querySelector("#clearMsg");

const cipherBtn = document.querySelector(".cipher");

cipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("chiffrement en cours...", msgToEncrypt.value);
});
