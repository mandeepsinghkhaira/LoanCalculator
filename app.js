//selectors
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const calculate = document.querySelector("#cal");
const container = document.querySelector(".container");
const body = document.querySelector("body");

//functions
function createTotal() {
  let loanWithInterest =
    parseFloat(amount.value) * (parseFloat(interest.value) / 100) +
    parseFloat(amount.value);
  let total = loanWithInterest / parseFloat(years.value);
  return total;
}

function createH1() {
  let h1 = document.createElement("h1");
  h1.style.color = "white";
  return h1;
}

function outputContainer() {
  let outputContainer = document.createElement("div");
  outputContainer.className = "container";
  outputContainer.style.textAlign = "center";
  body.appendChild(outputContainer);
  return outputContainer;
}

function backBtn() {
  let returnBtn = document.createElement("button");
  returnBtn.className = "btn btn-dark";
  returnBtn.id = "backBtn";
  returnBtn.innerText = "Go Back";
  return returnBtn;
}

function dogeLoading() {
  let img = document.createElement("img");
  img.src = "loading.gif";
  img.style.width = "50%";
  body.style.textAlign = "center";
  body.appendChild(img);
  return img;
}

//delegation

function goBack(e) {
  var element = e.target;
  if (element.innerText == "Go Back") {
    location.reload();
  }
}

//main
function main(e) {
  e.preventDefault();
  if (amount.value > 0 && interest.value > 0 && years.value > 0) {
    let total = createTotal();
    let h1 = createH1();
    let resultContainer = outputContainer();
    let returnButton = backBtn();

    container.style.display = "none";

    let doge = dogeLoading();

    setInterval(() => {
      doge.remove();
      resultContainer.appendChild(h1);
      resultContainer.append(returnButton);
      h1.innerText = `Yearly: £${String(total)}`;
    }, 2000);
  }
}

//events

function runEvents() {
  calculate.addEventListener("click", main);
  body.addEventListener("click", goBack);
}

runEvents();
