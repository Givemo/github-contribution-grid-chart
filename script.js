let container = document.querySelector(".container");
// Format Dates
let date = new Date().toDateString();

// Make grids using the following function
function makegrid(rows = 53, columns = 7) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);
  for (c = 0; c < rows * columns; c += 1) {
    const grid = document.createElement("div");
    const span = document.createElement("span");
    const div = document.createElement("div");
    grid.appendChild(span).className = "tooltiptext";
    grid.appendChild(div).className = "number";
    container.appendChild(grid).className = "grid tooltip";
  }
}
makegrid(7, 53);

let toolTipText = document.querySelectorAll(".tooltiptext");
let number = document.querySelectorAll(".number");

function contributionIncrease() {
  let value = Number(number.value);
  value = isNaN(value) ? 0 : value;
  value += 1;
  number.value = value;
  number.innerHTML = value;
}

function displayContribution() {
  if (number.innerHTML === "") {
    toolTipText.innerHTML = `No contributions on ${date}`;
    console.log(number.innerHTML);
  } else {
    let value = Number(number.value);
    toolTipText.innerHTML = `${value} contributions on ${date}`;
  }
}

grid = document.querySelectorAll(".grid");
grid.forEach((cell) => {
  cell.addEventListener("mouseover", displayContribution);
});

grid.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    let gridStyle = e.target.style;
    let value = Number(number.value);
    contributionIncrease();
    console.log(number.value);

    if (value === 1) {
      gridStyle.backgroundColor = "#EBEDF0";
    } else if (value === 2) {
      gridStyle.backgroundColor = "#9BE9A8";
    } else if (value === 3) {
      gridStyle.backgroundColor = "#40C463";
    } else if (value === 4) {
      gridStyle.backgroundColor = "#30A14E";
    } else if (value >= 5) {
      gridStyle.backgroundColor = "#216E39";
    } else {
      gridStyle.backgroundColor = "#ebedf0";
    }
  });
});

//toolTipText.innerHTML = `${Number(value) + 1} contributions on ${date}`;
/*
let addContribution = (function () {
  let colors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];

  return function (i) {
    return colors[i];
  };
})();*/
