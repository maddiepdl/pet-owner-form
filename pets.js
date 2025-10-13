console.log("Hello from pets.js!");

// global state object to store pets
const state = {
  pets: []
};

// create puppy and log status
const helloPet = createPet("Hello", 2, "puppy");
helloPet.status(); 

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
});