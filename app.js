import { dictionary, key } from "./mock.js";
import { handleErrorMsg, formatKey, updateInput } from "./utils.js";
import VigenereCipher from "./VigenereCipher.js";

const settingsCtn = document.querySelector(".settings-ctn");
const inputAlphabet = document.querySelector("#alphabet");
const inputKey = document.querySelector("#encryptKey");
const msgToEncrypt = document.querySelector("#clearMsg");
const msgToDecipher = document.querySelector("#encryptMsg");
const cipherBtn = document.querySelector(".cipherBtn");
const decipherBtn = document.querySelector(".decipherBtn");
let cipherKey = formatKey(key);

inputAlphabet.value = dictionary;
inputAlphabet.disabled = true;
inputKey.value = cipherKey;
const cipherAlgorithm = new VigenereCipher(
  inputKey.value,
  inputAlphabet.value,
  "$"
);

cipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const encryptedMsg = cipherAlgorithm.encode(msgToEncrypt.value);
  if (encryptedMsg !== -1) {
    updateInput(encryptedMsg, msgToDecipher, msgToEncrypt);
  }
});

decipherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const decipherMsg = cipherAlgorithm.decode(msgToDecipher.value);
  if (decipherMsg !== -1) {
    updateInput(decipherMsg, msgToEncrypt, msgToDecipher);
  }
});

inputKey.addEventListener("change", (e) => {
  cipherKey = formatKey(inputKey.value);
  const pattern = /^[A-Za-z]+$/;
  if (e.target.value === "" || !pattern.test(cipherKey)) {
    inputKey.classList.add("errorInput");
    cipherBtn.disabled = true;
    decipherBtn.disabled = true;
  }

  if (e.target.value === "") {
    handleErrorMsg("==== Clé de chiffrement absente ====", settingsCtn);
  } else if (pattern.test(cipherKey) === false) {
    handleErrorMsg(
      "==== Seules les lettres sans accents sont autorisées ====",
      settingsCtn
    );
  } else {
    cipherAlgorithm.setKey(cipherKey);
    inputKey.classList.remove("errorInput");
    cipherBtn.disabled = false;
    decipherBtn.disabled = false;
    handleErrorMsg();
  }
});

inputAlphabet.addEventListener("change", (e) => {});
