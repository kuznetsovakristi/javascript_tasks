const amount = document.querySelector(".amount");
const color = document.querySelector(".color");
const blocksContainer = document.querySelector(".blocks");

amount.addEventListener("change", e => {
  const quantity = e.target.value;
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const blocks = document.createElement("div");
    blocks.className = "item";
    blocks.innerText = i + 1;
    markup += blocks.outerHTML;
  }

  blocksContainer.innerHTML = markup;
})

function bg(block, color) {
  block.style.backgroundColor = color;
}
 
let changed = false;
color.addEventListener("change", e => {
  valueColor = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");
  let l = Object.keys(items).length;
  changed = !changed
  for (let i = 0; i < l; i++) {
    if (changed) {
    ((i + 1) % 2 !== 0) ? bg(items[i], valueColor) : bg(items[i], "#fff"); 
  } else {
    ((i + 1) % 2 == 0) ? bg(items[i], valueColor) : bg(items[i], "#fff"); 

  }
    
  }
})