console.log("hello world");

// global state object to store form
const state = {};
console.table(state);

// function when "Save" is clicked
function saveForm() {
  console.log("button clicked!");

// get the form values
  const ownerName = document.getElementById("ownerName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;
  const petName = document.getElementById("petName").value;
  const petType = document.getElementById("petType").value;

  // store values in global state
  state.ownerName = ownerName;
  state.email = email;
  state.phone = phone;
  state.city = city;
  state.zip = zip;
  state.petName = petName;
  state.petType = petType;

  console.table(state);

  // pet owner object factory function
  const petOwner = createPetOwner(state.ownerName, state.city, state.petName, state.petType);

  // render owner information to webpage
  petOwner.status();
  petOwner.render();
}

// click event listener to "Save" button
document.getElementById("saveButton").addEventListener("click", saveForm);