const container = document.querySelector('.container');
const nSquares = 16;

// render the square grid
//container.style['grid-template-columns'] = `repeat({nSquares}, 1fr)`;
//container.style['grid-template-rows'] = `repeat({nSquares}, auto)`;

console.log(container.style.cssText);

// Append the grid items to parent container
for (let i = 0; i < nSquares ** 2; i++) {
  let cellDiv = document.createElement('div');
  cellDiv.classList.add('grid-item');
  cellDiv.setAttribute('id', i + 1);
  cellDiv.textContent = i + 1;
  container.appendChild(cellDiv);
}

// get nodelist of grid items
const gridItems = document.querySelectorAll('.grid-item');

// set events
gridItems.forEach(elem => {
  let elemId = elem.getAttribute('id');

  elem.addEventListener('mouseenter', e => {
    console.log(`Now entering item ${elemId}`);
    elem.classList.toggle('hovered');
  });

  elem.addEventListener('mouseleave', e => {
    console.log(`Now leaving item ${elemId}`);
    elem.classList.toggle('hovered');
  });
});