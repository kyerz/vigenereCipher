import { dictionary, key } from "./mock.js";
import { handleErrorMsg } from "./utils.js";
import VigenereCipher from "./VigenereCipher.js";

const settingsCtn = document.querySelector(".settings-ctn");
const inputAlphabet = document.querySelector("#alphabet");
const inputKey = document.querySelector("#encryptKey");
const msgToEncrypt = document.querySelector("#clearMsg");
const msgToDecipher = document.querySelector("#encryptMsg");
const cipherBtn = document.querySelector(".cipherBtn");
const decipherBtn = document.querySelector(".decipherBtn");

inputAlphabet.value = dictionary;
inputKey.value = key;
const cipherAlgorithm = new VigenereCipher(inputKey.value, inputAlphabet.value);

cipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cipherAlgorithm.setKey(inputKey.value);
  const encryptedMsg = cipherAlgorithm.encode(msgToEncrypt.value);
  if (encryptedMsg !== -1) {
    msgToDecipher.value = encryptedMsg;
    msgToEncrypt.value = "";
  }
});

decipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cipherAlgorithm.setKey(inputKey.value);
  const decipherMsg = cipherAlgorithm.decode(msgToDecipher.value);
  msgToEncrypt.value = decipherMsg;
  msgToDecipher.value = "";
});

inputKey.addEventListener("change", (e) => {
  if (e.target.value === "") {
    inputKey.classList.add("errorInput");
    handleErrorMsg("==== Clé de chiffrement absente ====", settingsCtn);
  } else {
    inputKey.classList.remove("errorInput");
    document.querySelector(".errorMsg").remove();
  }
});
