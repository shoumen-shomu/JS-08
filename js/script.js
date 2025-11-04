let lb5Btn = document.getElementById("lb5Btn");
let lb10Btn = document.getElementById("lb10Btn");
let doller100 = document.getElementById("doller100");
let doller190 = document.getElementById("doller190");

lb5Btn.addEventListener("click", () => {
  doller100.removeAttribute("hidden");
});

// Plus Minus JS Start

let minusBtn = document.getElementById("minusBtn");
let result = document.getElementById("result");
let plusBtn = document.getElementById("plusBtn");

plusBtn.addEventListener("click", () => {
  if (result.innerText <= 9) {
    result.innerText++;
  } else {
    alert("Rich people");
  }
});
minusBtn.addEventListener("click", () => {
  if (result.innerText >= 1) {
    result.innerText--;
  } else {
    alert("Poor people");
  }
});

// Plus Minus JS End

// Counter Up Start

let counterUp = document.querySelectorAll(".counterUp");
// console.log(counterUp)
const arr = Array.from(counterUp);
// console.log(arr)

arr.map((item) => {
  // console.log(item.dataset.number)
  let counter = 0;
  function count() {
    counter++;
    item.innerText = counter;
    if (counter == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    count();
  }, 1000 / item.dataset.number);
});

// Counter Up End

