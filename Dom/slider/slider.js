const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const items = document.querySelector('#items');
const style = getComputedStyle(items);


btnLeft.addEventListener('click', function(event) {
  event.preventDefault();
  let right = parseInt(style.right);
  if (right > 0){
    items.style.right = right - 100  + 'px';
  }
}) 

btnRight.addEventListener('click', function(event) {
  event.preventDefault();
  let right = parseInt(style.right);
  if (right < 500){
    items.style.right = right + 100  + 'px';
  }
}) 