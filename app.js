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
  const encryptedMsg = cipherAlgorithm.encode(msgToEncrypt.value);
  if (encryptedMsg !== -1) {
    msgToDecipher.value = encryptedMsg;
    msgToEncrypt.value = "";
  }
});

decipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const decipherMsg = cipherAlgorithm.decode(msgToDecipher.value);
  if (decipherMsg !== -1) {
    msgToEncrypt.value = decipherMsg;
    msgToDecipher.value = "";
  }
});

inputKey.addEventListener("change", (e) => {
  cipherAlgorithm.setKey(inputKey.value);

  if (e.target.value === "") {
    inputKey.classList.add("errorInput");
    handleErrorMsg("==== Clé de chiffrement absente ====", settingsCtn);
  } else {
    inputKey.classList.remove("errorInput");
    if (document.querySelector(".errorMsg")) {
      document.querySelector(".errorMsg").remove();
    }
  }
});

inputAlphabet.addEventListener("change", (e) => {});
