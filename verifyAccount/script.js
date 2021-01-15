const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      const index = idx + 1 > 5 ? 5 : idx + 1
      setTimeout(() => codes[index].focus(), 10);
    } else if (e.key === "Backspace") {
      const index = idx - 1 < 0 ? 0 : idx - 1
      setTimeout(() => codes[index].focus(), 10);
    } else {
      e.preventDefault()
    }
  });
});
