const btn = document.getElementById("generateBtn");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;
});

copyBtn.addEventListener("click", () => {
  const color = colorCode.innerText;
  navigator.clipboard.writeText(color).then(() => {
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy Color"), 1500);
  });
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
