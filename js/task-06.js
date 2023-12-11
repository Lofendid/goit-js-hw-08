document.addEventListener('DOMContentLoaded', function() {
  const boxesContainer = document.getElementById('boxes');
  const savedBoxes = localStorage.getItem('boxes');

  if (savedBoxes) {
    boxesContainer.innerHTML = savedBoxes;
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const inputAmount = document.querySelector(`input[type='number']`);
  const amount = Number(inputAmount.value);

  if (isNaN(amount) || amount < 1 || amount > 100 || inputAmount.value.includes('.')) {
    alert('Please enter a valid number between 1 and 100.');
    inputAmount.value = '';
    return;
  }

  const boxesContainer = document.getElementById('boxes');

  let boxSize = 30;
    const lastBox = boxesContainer.lastElementChild;
  if (lastBox) boxSize = parseInt(lastBox.style.width) + 10;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div'); 
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);

    boxSize += 10;
  }

  inputAmount.value = '';

  localStorage.setItem('boxes', boxesContainer.innerHTML);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  localStorage.removeItem('boxes');
}

const createBtn = document.querySelector('button[data-create]');
createBtn.addEventListener('click', createBoxes);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createBoxes();
  }
});
const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace' || event.key === 'Escape') {
    destroyBoxes();
  }
});