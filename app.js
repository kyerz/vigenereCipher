import { dictionary, key } from "./mock.js";

const inputAlphabet = document.querySelector("#alphabet");
inputAlphabet.value = dictionary;

const inputKey = document.querySelector("#encryptKey");
inputKey.value = key;
