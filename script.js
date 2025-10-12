console.log("hello world");

// empty object to store form
const state = {};

console.table(state);

// function and message when "Save" is clicked
function saveForm() {
  console.log("button clicked!");

  // get the form values 
  const ownerName = document.getElementById("ownerName").value;
  console.log("Owner Name:", ownerName);

  const email = document.getElementById("email").value;
  console.log("Email:", email);

  const phone = document.getElementById("phone").value;
  console.log("Phone:", phone);

  const city = document.getElementById("city").value;
  console.log("City:", city);

  const zip = document.getElementById("zip").value;
  console.log("Zip Code:", zip);

  const petName = document.getElementById("petName").value;
  console.log("Pet's Name:", petName);

  // store into state object and display
  state.ownerName = ownerName;
  state.email = email;
  state.phone = phone;
  state.city = city;
  state.zip = zip;
  state.petName = petName;

  console.table(state);
}

// click event listener to "Save" button to run saveForm function
document.getElementById("saveButton").addEventListener("click", saveForm);