console.log("Hello from pets.js!");

// global state object to store pets
const state = {
  pets: []
};

// create puppy, log status and HTML
const helloPet = createPet("Hello", 2, "puppy");
helloPet.status(); 
console.log(helloPet.html());

// render all pets to webpage
function renderPets() {
  let allPetsHTML = "";

  // loop through pets and HTML
  state.pets.forEach(pet => {
    const petHTML = pet.html();
    allPetsHTML += petHTML;
  });

  console.log("All Pets HTML:", allPetsHTML);

  // petsContainer with HTML
  document.getElementById("petsContainer").innerHTML = allPetsHTML;
}

document.getElementById("createPetBtn").addEventListener("click", () => {
  // get the form values
  const name = document.getElementById("petName").value;
  const age = parseInt(document.getElementById("petAge").value);
  const species = document.getElementById("petSpecies").value;

  console.log("Form Input:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Species:", species);

  // new pet factory function
  const newPet = createPet(name, age, species);

  // new pet to global pets array and display
  state.pets.push(newPet);

  newPet.status();
  console.table(state.pets);

  // render pets to the page
  renderPets();
});