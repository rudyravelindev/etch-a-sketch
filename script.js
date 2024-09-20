// Default color
let currentColor = 'black';

// Create the grid with default size 16x16
function createGrid(size) {
  const container = document.querySelector('.grid-container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Clear previous grid items
  container.innerHTML = '';

  // Create new grid items
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
  enableDrawing();
}

// Enable drawing on hover
function enableDrawing() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = currentColor;
    });
  });
}

// Color picker
document.querySelector('#color-picker').addEventListener('input', (e) => {
  currentColor = e.target.value;
});

// Clear grid
function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = '';
  });
}

document.querySelector('#clear-btn').addEventListener('click', clearGrid);

// Resize grid
function resizeGrid() {
  const newSize = parseInt(prompt('Enter new grid size (e.g., 16 for 16x16):'));
  if (newSize && newSize > 0) {
    createGrid(newSize);
  }
}

document.querySelector('#resize-btn').addEventListener('click', resizeGrid);

// Random color mode
function enableRandomColorMode() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      item.style.backgroundColor = randomColor;
    });
  });
}

document.querySelector('#random-color-btn').addEventListener('click', enableRandomColorMode);

// Eraser mode
function enableEraserMode() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '';
    });
  });
}

document.querySelector('#eraser-btn').addEventListener('click', enableEraserMode);

// Initialize the grid
createGrid(16);
