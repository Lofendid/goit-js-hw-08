function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = () => { 
  const currentColor = body.style.backgroundColor = getRandomHexColor();
  colorInfo.textContent = currentColor;
};

const colorInfo = document.querySelector('.color');
const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', handleClick);


