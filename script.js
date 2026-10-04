const container = document.getElementById('container');
let gridSize = 16;
const totalCells = gridSize * gridSize;
const rectangle = container.getBoundingClientRect();
const containerWidth = rectangle.width;
const cellWidth = containerWidth / gridSize;

for (let i = 0; i < totalCells; i++) {
  const newDiv = document.createElement('div');
  newDiv.style.width = cellWidth + 'px';
  newDiv.style.height = cellWidth + 'px';
  container.append(newDiv);
}
