export const handleErrorMsg = (msg, targetTag) => {
  const message = document.querySelector(".errorMsg");
  if (message) {
    return 0;
  } else {
    const p = document.createElement("p");
    p.textContent = msg;
    p.classList.add("errorMsg");
    targetTag.append(p);
  }
};

export const formatKey = (key) => key.trim().split(" ").join("").toLowerCase();
