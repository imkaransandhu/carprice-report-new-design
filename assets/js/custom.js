// Second hr display none.
document.querySelectorAll("hr")[1].style.display = "none";

// Chaning print button text.
document.querySelectorAll(
  ".btn.btn-success.waves-effect.waves-light.me-1"
)[0].innerHTML = "PRINT / DOWNLOAD";

// Hiding Estimated Sales Range text
document.querySelectorAll(".py-2 h5.font-size-15")[0].style.display = "none";

// Adding a class to table to show border
document.querySelector("table").classList.add("table-bordered");

// Changing bottom row css
let mainDivForBottom = document.querySelector(".py-2");
mainDivForBottom.classList.add("row");

// Changing table resposive div
let tableDiv = document.querySelector(".py-2 .table-responsive");
tableDiv.classList.add("col-12");
tableDiv.classList.add("col-md-6");

// Changing fuel econmy and vehicle saftey column
let safetyAndEconomyRow = document.querySelectorAll(".py-2 .row")[0];
safetyAndEconomyRow.classList.add("col-12");
safetyAndEconomyRow.classList.add("col-md-6");
// safetyAndEconomyRow.style.flexDirection = "column-reverse";
safetyAndEconomyRow.children[0].classList.remove("col-6");
safetyAndEconomyRow.children[1].classList.remove("col-6");
safetyAndEconomyRow.children[0].classList.add("col-12");
safetyAndEconomyRow.children[1].classList.add("col-12");
safetyAndEconomyRow.children[0].classList.add("col-sm-5");
safetyAndEconomyRow.children[1].classList.add("col-sm-7");
safetyAndEconomyRow.children[0].classList.add("col-md-12");
safetyAndEconomyRow.children[1].classList.add("col-md-12");
safetyAndEconomyRow.children[0].classList.add("fuel-economy");
safetyAndEconomyRow.children[1].classList.add("vehicle-safety");
safetyAndEconomyRow.classList.remove("row");
// safetyAndEconomyRow.style.display = "flex";

// Changing copyright div
let copyrightDiv = document.querySelector(".py-2 .d-print-none .row");
copyrightDiv.children[0].classList.remove("col-8");
copyrightDiv.children[1].classList.remove("col-4");
copyrightDiv.children[0].classList.add("col-12");
copyrightDiv.children[1].classList.add("col-12");
copyrightDiv.children[0].classList.add("col-md-8");
copyrightDiv.children[1].classList.add("col-md-4");

// Wraping a row outside fuel and safety
$(".fuel-economy, .vehicle-safety").wrapAll('<div class="row table-right">');

// Adding dollar sign in the fuel economy cost.
let economyCost = document.querySelector(
  ".fuel-economy small strong"
).innerHTML;
document.querySelector(
  ".fuel-economy small strong"
).innerHTML = `$${economyCost}`;

// Term and condition on the next line
let optifleetDislaimer = document.querySelector(".d-print-none p.font-size-6");
let optifleetDislaimerText = optifleetDislaimer.innerHTML;
console.log(optifleetDislaimerText);
const optifleetDislaimerArray = optifleetDislaimerText.split("Limited");
optifleetDislaimerText = `${optifleetDislaimerArray[0]} Limited. <br>${optifleetDislaimerArray[1]}`;
optifleetDislaimer.innerHTML = optifleetDislaimerText;

// Estimated value javascript
let esimatedValueHeading = document.querySelector("h1");
let esimatedValueHeadingText = esimatedValueHeading.innerHTML;
const esimatedValueHeadingArray = esimatedValueHeadingText.split(":");
esimatedValueHeadingText = `${esimatedValueHeadingArray[0]} <br><strong>$${esimatedValueHeadingArray[1]}</strong>`;
esimatedValueHeading.innerHTML = esimatedValueHeadingText;

// table last row confidence level Changing cofidence level to confidence
let confidenceLevel = document.querySelectorAll(
  ".table-responsive thead tr th"
)[2];
confidenceLevel.style.lineHeight = "1";
let confidenceLevelText = confidenceLevel.innerHTML;
const confidenceLevelArray = confidenceLevelText.split(" ");
confidenceLevelText = `${confidenceLevelArray[0]}`;
confidenceLevel.innerHTML = confidenceLevelText;

// Padding for row of estimated value
document.querySelectorAll(".card .row")[2].style.paddingBottom = "50px";
