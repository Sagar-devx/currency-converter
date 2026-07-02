//Base URL
const BASE_URL = "https://open.er-api.com/v6/latest/";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// fill Dropdown with currency codes

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;


    // Default values

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  // Dropdown change flag update

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Actual Conversion

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  // if amount invalid then amount auto set to 1

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // API URL

  const URL = `${BASE_URL}${fromCurr.value}`;

  try 
  {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[toCurr.value];

    let finalAmount = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(4)} ${toCurr.value}`;
  } 
  catch (error) 
  {
    msg.innerText = "API Error! Please try again.";
  }
};

//flag update 

const updateFlag = (element) => {
  let currCode = element.value; 
  let countryCode = countryList[currCode]; 

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// convert amount on button click

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// inital rate convert on window load

window.addEventListener("load", () => {
  updateExchangeRate();
});
