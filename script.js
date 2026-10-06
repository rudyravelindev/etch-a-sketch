const container = document.getElementById('container');

const containerWidth = container.clientWidth;
const newGridButton = document.getElementById('btn-newGrid');
newGridButton.addEventListener('click', createNewGrid);

function divBackground(event) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  event.target.style.backgroundColor = randomColor;
}
function gridSizing(gridSize) {
  container.replaceChildren();
  const cellWidth = containerWidth / gridSize;

  const totalCells = gridSize * gridSize;
  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', divBackground);
    newDiv.style.width = cellWidth + 'px';
    newDiv.style.height = cellWidth + 'px';
    container.append(newDiv);
  }
}

function createNewGrid() {
  let newGridSize = 0;
  while (!(newGridSize >= 1 && newGridSize <= 100)) {
    const userNewGrid = prompt('Enter a grid size:');
    newGridSize = parseInt(userNewGrid);
  }
  gridSizing(newGridSize);
}
gridSizing(16);
