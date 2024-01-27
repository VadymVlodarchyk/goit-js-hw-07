function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }


  const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', createElem)
function createElem() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
};

  const destroyButton = document.querySelector('[data-destroy]');
  destroyButton.addEventListener('click', destroyBoxes);

  