// Handle form inputs
const numberInputs = document.getElementsByTagName("input");

// Validation message container
const invalidMessage = document.querySelector(".invalid-message");

let invalidItems = [];

// Apply validation when input fields are unfocused
for (var i = 0; i < numberInputs.length; i++) {
  numberInputs[i].addEventListener("focusout", function (event) {
    // Gather invalid items, apply invalid css class
    if (!event.target.validity.valid) {
      event.target.classList.add("invalid");

      if (!invalidItems.includes(event.target.name)) {
        invalidItems.push(event.target.name);
      }
    } else {
      event.target.classList.remove("invalid");

      const index = invalidItems.indexOf(event.target.name);
      if (index > -1) {
        invalidItems.splice(index, 1);
      }
    }

    // Apply invalid message
    invalidMessage.children[0].textContent = invalidItems.join(", ");
    if (invalidMessage.children[0].textContent.length) {
      invalidMessage.classList.add("active");
    } else {
      invalidMessage.classList.remove("active");
    }
  });
}

// Handle calculation
const form = document.getElementsByTagName("form")[0];
const flour = document.getElementById("flour");
const result = document.querySelector(".result");
const calculation = {};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!invalidItems.length) {
    // Clear existing items
    result.innerHTML = "";

    // Make calculations
    const totalFlour = Number(numberInputs[0].value);
    calculation.water = totalFlour * Number(numberInputs[1].value);
    calculation.levain = totalFlour * Number(numberInputs[2].value);
    calculation.salt = totalFlour * Number(numberInputs[3].value);
    calculation.wholemeal = totalFlour * Number(numberInputs[4].value);
    // = C3+B7+B8+B9 in spreadsheet. Is this correct?
    calculation.total = totalFlour + calculation.water + calculation.levain + calculation.salt;

    const heading = document.createElement("h3");
    heading.innerHTML = "Result";
    result.appendChild(heading);

    Object.entries(calculation).forEach(([name, value]) => {
      const div = document.createElement("div");
      div.innerHTML = `${name.charAt(0).toUpperCase() + name.slice(1)} - ${value}`;
      div.classList.add(name);
      result.appendChild(div);
    });
  }
});

// Copyright
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").textContent = year;
