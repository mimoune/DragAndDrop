const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dropDrag);
}

function dragStart(e) {
    // console.log("dragStart");
    this.className += " hold";
    setTimeout(() => (this.className = "invisable"), 0);
}
function dragEnd(e) {
    // console.log("dragEnd");
    this.className = "fill";
}
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
    // this.append(fill);
}

function dragLeave(e) {
    // this.append(fill);
    this.className = "empty";
}

function dropDrag(e) {
    this.className = "empty";
    this.append(fill);
}
