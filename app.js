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
inputAlphabet.disabled = true;
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
  if (document.querySelector(".errorMsg")) {
    document.querySelector(".errorMsg").remove();
  }

  const pattern = /^[A-Za-z]+$/;
  if (e.target.value === "" || !pattern.test(inputKey.value)) {
    inputKey.classList.add("errorInput");
  }

  if (e.target.value === "") {
    handleErrorMsg("==== Clé de chiffrement absente ====", settingsCtn);
  } else if (pattern.test(inputKey.value) === false) {
    handleErrorMsg(
      "==== Seules les lettres sans accents sont autorisées ====",
      settingsCtn
    );
  } else {
    cipherAlgorithm.setKey(inputKey.value);
    inputKey.classList.remove("errorInput");
  }
});

inputAlphabet.addEventListener("change", (e) => {});
