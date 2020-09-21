let container = document.querySelector(".container");
let total = document.querySelector(".amount");
let totalContributions = 0;
// Format Dates
let date = new Date().toDateString();

// Make grids using the following function
function makegrid(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);
  for (c = 0; c < rows * columns; c += 1) {
    const grid = document.createElement("div");
    const span = document.createElement("span");
    grid.appendChild(span).className = "tooltiptext";
    container.appendChild(grid).className = "grid tooltip";
  }
}

makegrid(7, 24);

let toolTipText = document.querySelectorAll(".tooltiptext");
let number = document.querySelectorAll(".number");
let grid = document.querySelectorAll(".grid");

grid.forEach((val) => {
  val.style.backgroundColor = "#ddd";
  let count = 0;
  val.addEventListener("mouseover", (e) => {
    let item = e.target;
    count = "No";
    if (val.style.backgroundColor === "rgb(221, 221, 221)") {
      item.firstChild.innerHTML = `${count} contributions on ${date}`;
    } else if (val.style.backgroundColor === "rgb(235, 237, 240)") {
      item.firstChild.innerHTML = `1 contributions on ${date}`;
    } else if (val.style.backgroundColor === "rgb(155, 233, 168)") {
      item.firstChild.innerHTML = `2 contributions on ${date}`;
    }
  });
});

function add(a, b) {
  a + b;
}

grid.forEach((cell) => {
  let count = 0;
  cell.addEventListener("click", (e) => {
    ++count;
    ++totalContributions;
    let gridStyle = e.target;
    total.innerHTML = `${totalContributions}`;
    gridStyle.firstChild.innerHTML = `${count} contributions on ${date}`;

    gridStyle.style.backgroundColor = getRandomColor();
    gridStyle.firstChild.style.backgroundColor = "black";
  });
});

let addContribution = (function () {
  let colors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  return function (i) {
    return colors[i];
  };
})();

function getRandomColor() {
  let colors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  let color;
  for (var i = 0; i < 6; i++) {
    color = colors[Math.floor(Math.random() * 4)];
  }
  return color;
}

function getRandomNumber() {}
