console.log("hello");
const canvasparty = document.getElementById("canvasparty");
const greetingHeader = document.querySelector(".greeting");
const sayhi = document.querySelector(".sayhi");
greetingHeader.innerText = "hello";

const gday = () => {
  greetingHeader.innerText = "G-day!";
};

sayhi.addEventListener("click", gday);
