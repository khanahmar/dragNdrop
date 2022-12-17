const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
// console.log(empties);
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("click", (e) => {
    console.log("click");
  });
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList = "";
  }, 0);
}
function dragEnd() {
  this.classList = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("entered");
}
function dragLeave() {
  this.classList = "empty";
}
function dragDrop() {
  this.classList = "empty";
  this.append(fill);
}
