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
function dragOver() {
  console.log("drag over");
}
function dragEnter() {
  console.log("drag enter");
}
function dragLeave() {
  console.log("drag leave");
}
function dragDrop() {
  console.log("drag drop");
}
