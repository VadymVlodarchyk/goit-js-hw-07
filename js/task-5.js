const backgroundColor = document.querySelector('.color');
const batton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

batton.addEventListener('click', changeColor);
function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  backgroundColor.textContent = newColor;
};





















