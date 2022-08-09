console.log("hello");
const canvasparty = document.getElementById("canvasparty");
const greetingHeader = document.querySelector(".greeting");
const sayhi = document.querySelector(".sayhi");
const ctx = canvasparty.getContext("2d");
canvasparty.height = 800;
canvasparty.width = 800;
const gday = () => {
  greetingHeader.innerText = "G-day!";
};

greetingHeader.innerText = "hello";
sayhi.addEventListener("click", gday);

/* some functions
ctx.strokeRect(300, 300, 200, 200);
ctx.fillRect(300, 300, 5, 200);
ctx.beginPath();
ctx.rect();
ctx.fill();
ctx.fillRect();
ctx.lineTo

*/

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
