export const formatKey = (key) => key.trim().split(" ").join("").toLowerCase();

export const handleErrorMsg = (msg = "", targetTag) => {
  const message = document.querySelector(".errorMsg");
  if (message) message.remove();

  if (msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    p.classList.add("errorMsg");
    targetTag.append(p);
  }
};

export const updateInput = (content, inputUpdate, inputClear) => {
  inputUpdate.value = content;
  inputClear.value = "";
};
