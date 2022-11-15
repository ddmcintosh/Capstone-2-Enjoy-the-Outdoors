"use strict";

window.onload = init;

const locationsArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function init() {
  console.log("locationData.js");
  fillStateDropdown();
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.onclick = searchBtnOnClick;

  // parkCheckbox = document.getElementById("parkCheckbox").style.display = "none";
}

function fillStateDropdown() {
  const selectState = document.getElementById("selectState");
  let selectStateOption = document.createElement("option");
  selectStateOption.value = "";
  selectStateOption.textContent = "Select a State...";
  selectState.appendChild(selectStateOption);

  let locationsArrayLength = locationsArray.length;
  for (let i = 0; i < locationsArrayLength; i++) {
    let newOption = document.createElement("option");
    newOption.value = locationsArray[i];
    newOption.textContent = locationsArray[i];

    selectState.appendChild(newOption);
  }
}

function searchBtnOnClick() {
  const selectState = document.getElementById("selectState");
  let selectedStateByUser = selectState.value;

  let message = `You selected ${selectedStateByUser}.`;
  const stateInfo = document.getElementById("state&ParkInfo");
  stateInfo.innerHTML = message;
}
