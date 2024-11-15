const inputField = document.querySelector(".search-input");
const inputContainer = document.querySelector(".input-container");
const resultContainer = document.querySelector(".result-container");
const untitledResult = document.querySelector(".untitled-result-container");
const infoBox = document.querySelector(".info-box");

inputField.addEventListener("input", () => {
  if (
    inputField.value.trim() !== "" &&
    inputField.value.trim() !== "untitled"
  ) {
    resultContainer.classList.remove("hidden");
    inputContainer.classList.remove("bottom-radius");
    infoBox.classList.remove("hidden");
    untitledResult.classList.add("hidden");
  } else if (inputField.value.trim() === "untitled") {
    untitledResult.classList.remove("hidden");
    infoBox.classList.add("hidden");
  } else {
    resultContainer.classList.add("hidden");
    inputContainer.classList.add("bottom-radius");
    untitledResult.classList.add("hidden");
  }
});
