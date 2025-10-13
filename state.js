console.log("Hello from state.js!");

// global state object
const state = {
  pets: [],     // pet objects array
  name: "",     
  email: "",   
  zipcode: ""   
};

// saves form to localStorage and loads
state.name = localStorage.getItem("name") || "";
state.email = localStorage.getItem("email") || "";
state.zipcode = localStorage.getItem("zipcode") || "";

console.log("Loaded form data from localStorage:");
console.table({
  name: state.name,
  email: state.email,
  zipcode: state.zipcode
});

// load localStorage
function loadPets() {
  const petString = localStorage.getItem("pets");

  // convert back into an array of pets
  const savedPets = JSON.parse(petString) || [];

  // clear the array
  state.pets = [];

  // loop through pets
  for (let i = 0; i < savedPets.length; i++) {
    const petData = savedPets[i];
    state.pets.push(createPet(petData.name, petData.age, petData.species));
  }

  console.log("Rehydrated pets from localStorage:");
  console.table(state.pets);
}

// function serializePet code from Day5 instructions
function serializePet(pet) {
  return {
    name: pet.name,
    age: pet.age,
    species: pet.species
  };
}

// save pets to localStorage
function savePets() {
  const serializedPets = state.pets.map(serializePet);

  // save array of plain pet object
  localStorage.setItem("pets", JSON.stringify(serializedPets));

  console.log("Saved pets to localStorage.");
}

loadPets();