"use strict";

window.onload = init;

const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

function init() {
  console.log("parkTypeData.js");
  fillParkTypeDropdown();
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.onclick = searchBtnOnClick;
}

function fillParkTypeDropdown() {
  const selectPark = document.getElementById("selectPark");
  let selectParkOption = document.createElement("option");
  selectParkOption.value = "";
  selectParkOption.textContent = "Select a Park...";
  selectPark.appendChild(selectParkOption);

  let parkTypesArrayLength = parkTypesArray.length;
  for (let i = 0; i < parkTypesArrayLength; i++) {
    let newOption = document.createElement("option");
    newOption.value = parkTypesArray[i];
    newOption.textContent = parkTypesArray[i];

    selectPark.appendChild(newOption);
  }
}

function searchBtnOnClick() {
  const selectPark = document.getElementById("selectPark");
  let selectedParkByUser = selectPark.value;

  let message = `You selected ${selectedParkByUser}.`;
  const parkInfo = document.getElementById("state&ParkInfo");
  parkInfo.innerHTML = message;
}
