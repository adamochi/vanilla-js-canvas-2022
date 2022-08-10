const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const saveBtn = document.getElementById("saveBtn");
const textInput = document.getElementById("text");
const addFile = document.getElementById("file");
const whiteout = document.getElementById("whiteout");
const eraseBtn = document.getElementById("erase");
const fillBtn = document.getElementById("fill");
const randomBtn = document.getElementById("random");
const colourSelector = document.getElementById("color-custom");
const linwidth = document.getElementById("line-width");
const canvasparty = document.getElementById("canvasparty");
const greetingHeader = document.querySelector(".greeting");
const sayhi = document.querySelector(".sayhi");
const ctx = canvasparty.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
canvasparty.width = CANVAS_WIDTH;
canvasparty.height = CANVAS_HEIGHT;

const gday = () => {
  if (greetingHeader.innerText === "Hello again") {
    greetingHeader.innerText = "Hello forever!";
  } else if (greetingHeader.innerText === "G-day!") {
    greetingHeader.innerText = "Hello again";
  } else {
    greetingHeader.innerText = "G-day!";
  }
};
greetingHeader.innerText = "Paint JS 🎨 v.2022";
sayhi.addEventListener("click", gday);

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];
ctx.lineWidth = linwidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

const onMove = (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
};

const ondown = () => {
  ctx.beginPath();
  isPainting = true;
  // random thing >>
  // ctx.beginPath();
  // const color = colors[Math.floor(Math.random() * colors.length)];
  // ctx.strokeStyle = color;
  // ctx.lineTo(event.offsetX, event.offsetY);
  // ctx.stroke();
};
const stopDrawing = () => {
  isPainting = false;
};
const onWidthChange = () => {
  ctx.beginPath();
  ctx.lineWidth = linwidth.value;
};

const randomColor = () => {
  // console.log(ctx.strokeStyle);
  let color = colors[Math.floor(Math.random() * colors.length)];
  // console.log(color);
  if (color === ctx.strokeStyle) {
    randomColor();
  } else {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    colourSelector.value = color;
  }
};
const handleColorChoice = () => {
  ctx.strokeStyle = colourSelector.value;
};

const onColorClick = (e) => {
  let colorOpt = e.target.dataset.color;
  ctx.strokeStyle = colorOpt;
  ctx.fillStyle = colorOpt;
  colourSelector.value = colorOpt;
};

const onModeClick = () => {
  if (isFilling) {
    isFilling = false;
    fillBtn.innerText = "Fill";
  } else {
    isFilling = true;
    fillBtn.innerText = "Draw";
  }
};

const onCanvasClick = () => {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};
const eraseAll = () => {
  ctx.save();
  ctx.fillStyle = "whitesmoke";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.restore();
};
const handleWhiteout = () => {
  ctx.strokeStyle = "white";
  isFilling = false;
  fillBtn.innerText = "Fill";
};
const onAddFile = (e) => {
  console.dir(e);
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image(); // same as doing <img src="" />
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    addFile.value = null;
  }; // canvasparty.onmousemove = onMove = () => {};
};

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // whatever change between save and restore will not be remembered
    ctx.lineWidth = 1;
    ctx.font = "36px 'Press Start 2P'";
    ctx.fillText(text, event.offsetX, event.offsetY);
    // ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

const onSaveClick = () => {
  const url = canvasparty.toDataURL(); // <a href="" download
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing🎨.png";
  a.click();
};

canvasparty.addEventListener("dblclick", onDoubleClick);
canvasparty.addEventListener("mousemove", onMove);
canvasparty.addEventListener("mousedown", ondown);
canvasparty.addEventListener("mouseup", stopDrawing);
canvasparty.addEventListener("mouseleave", stopDrawing);
linwidth.addEventListener("change", onWidthChange);
colourSelector.addEventListener("change", handleColorChoice);
randomBtn.addEventListener("click", randomColor);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
fillBtn.addEventListener("click", onModeClick);
canvasparty.addEventListener("click", onCanvasClick);
eraseBtn.addEventListener("click", eraseAll);
whiteout.addEventListener("click", handleWhiteout);
addFile.addEventListener("change", onAddFile);
saveBtn.addEventListener("click", onSaveClick);

/* some functions
ctx.strokeRect(x:, y:, width, height);
ctx.fillRect(300, 300, 5, 200);
ctx.beginPath(x,y);
ctx.rect();
ctx.fill();
ctx.fillRect();
ctx.lineTo(x,y)


// Making a house and a character
ctx.fillStyle = "palevioletred";
ctx.fillRect(300, 300, 5, 200);

ctx.fillRect(600, 300, 5, 200);
ctx.fillRect(300, 300, 300, 5);
ctx.fillRect(300, 500, 300, 5);
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(700, 300);
ctx.lineTo(450, 100);
ctx.fill();
ctx.beginPath();
ctx.moveTo(500, 600);
ctx.fillRect(400, 400, 50, 100);

ctx.beginPath();
ctx.moveTo(500, 500);
ctx.arc(500, 400, 20, 0, 2 * Math.PI); // (x, y, starting angle, and finishing angle of the circle)
ctx.fillStyle = "turquoise";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.beginPath();
// head
ctx.arc(500, 400, 20, 0, 2 * Math.PI);
// glasses
ctx.arc(508, 399, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(500, 400, 20, 0, 1 * Math.PI);
ctx.arc(492, 399, 5, 1 * Math.PI, 3 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(496, 398);
ctx.lineTo(502, 398);
ctx.stroke();
// eyes
ctx.beginPath();
ctx.fillStyle = "darkslateblue";
ctx.arc(492, 399, 3, Math.PI, 2 * Math.PI);
ctx.arc(508, 399, 3, Math.PI, 2 * Math.PI);
ctx.fill();
// body
ctx.beginPath();
ctx.moveTo(500, 420);
ctx.lineTo(500, 470);
ctx.lineTo(520, 500);
ctx.moveTo(500, 470);
ctx.lineTo(480, 500);
ctx.moveTo(500, 430);
ctx.lineTo(530, 460);
ctx.moveTo(500, 430);
ctx.lineTo(480, 460);

ctx.stroke();
*/
