console.log("hello world");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const randomBtn = document.getElementById("random");
const colourSelector = document.getElementById("color-custom");
const linwidth = document.getElementById("line-width");
const canvasparty = document.getElementById("canvasparty");
const greetingHeader = document.querySelector(".greeting");
const sayhi = document.querySelector(".sayhi");
const ctx = canvasparty.getContext("2d");
canvasparty.height = 500;
canvasparty.width = 800;
const gday = () => {
  greetingHeader.innerText = "G-day!";
};
greetingHeader.innerText = "hello";
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
let isPainting = false;

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

canvasparty.addEventListener("mousemove", onMove);
canvasparty.addEventListener("mousedown", ondown);
canvasparty.addEventListener("mouseup", stopDrawing);
canvasparty.addEventListener("mouseleave", stopDrawing);
linwidth.addEventListener("change", onWidthChange);
colourSelector.addEventListener("change", handleColorChoice);
randomBtn.addEventListener("click", randomColor);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
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
