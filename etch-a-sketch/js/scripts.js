const container = document.querySelector('.container');
const nSquares = 16;

// render the square grid
//container.style['grid-template-columns'] = `repeat({nSquares}, 1fr)`;
//container.style['grid-template-rows'] = `repeat({nSquares}, auto)`;

console.log(container.style.cssText);

// Append the cells
for (let i = 0; i < nSquares ** 2; i++) {
  let cellDiv = document.createElement('div');
  cellDiv.classList.add('grid-item');
  cellDiv.textContent = i + 1;
  container.appendChild(cellDiv);
}
