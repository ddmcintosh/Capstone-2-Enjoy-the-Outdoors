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



function searchBtnOnClick() {
  const selectPark = document.getElementById("selectPark");
  let selectedParkByUser = selectPark.value;

  let message = `You selected ${selectedParkByUser}.`;
  const parkInfo = document.getElementById("state&ParkInfo");
  parkInfo.innerHTML = message;
}
