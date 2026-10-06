const container = document.getElementById('container');

const newGridButton = document.getElementById('btn-newGrid');
newGridButton.addEventListener('click', createNewGrid);

function divBackground(event) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  event.target.style.opacity = Math.max(0, event.target.style.opacity - 0.1);
  event.target.style.backgroundColor = randomColor;
}
function gridSizing(gridSize) {
  const containerWidth = container.clientWidth;

  container.replaceChildren();
  const cellWidth = containerWidth / gridSize;

  const totalCells = gridSize * gridSize;
  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('mouseenter', divBackground);
    newDiv.style.width = cellWidth + 'px';
    newDiv.style.height = cellWidth + 'px';
    newDiv.style.opacity = 1;
    container.append(newDiv);
  }
}

function createNewGrid() {
  let newGridSize = 0;
  while (
    !(Number.isInteger(newGridSize) && newGridSize >= 1 && newGridSize <= 100)
  ) {
    const userNewGrid = prompt('Enter a grid size:');
    if (userNewGrid === null) {
      return;
    }
    newGridSize = Number(userNewGrid);
  }
  gridSizing(newGridSize);
}
gridSizing(16);
