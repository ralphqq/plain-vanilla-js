const container = document.querySelector('.container');
const resetGridBtn = document.querySelector('#reset-grid-btn')
let nSquares = 16; // default

renderGrid(nSquares);

resetGridBtn.addEventListener('click', e => {
  // Prompt user
  const userInput = prompt('No. of squares per side: ');
  if (userInput != null) {
    nSquares = parseInt(userInput);
  }
  renderGrid(nSquares);
});

function renderGrid(nCols) {
  // Clear current grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // render the new square grid
  container.style['grid-template-columns'] = `repeat(${nCols}, 1fr)`;
  container.style['grid-template-rows'] = `repeat(${nCols}, auto)`;

  // Append the grid items to parent container
  for (let i = 0; i < nCols ** 2; i++) {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('grid-item');
    cellDiv.setAttribute('id', i + 1);
    container.appendChild(cellDiv);
  }

  // get nodelist of grid items
  let gridItems = document.querySelectorAll('.grid-item');

  // set events
  gridItems.forEach(elem => {
    elem.addEventListener('mouseenter', e => {
      elem.classList.toggle('hovered');
    });

    elem.addEventListener('mouseleave', e => {
      elem.classList.toggle('hovered');
    });
  });
}
