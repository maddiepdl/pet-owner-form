// pet owner object function
function createPetOwner(name, city, petName, petType) {
  console.log("Creating owner...");

  return {
    name,
    city,
    petName,
    petType,

    // method to show owner information
    status() {
      console.log("Pet Owner Status:");
      console.table({
        name: this.name,
        city: this.city,
        petName: this.petName,
        petType: this.petType
      });
    },

    render() {
      console.log("Rendering owner to page...");

      // Update the page with the pet owner's details
      document.getElementById("ownerNameDisplay").textContent = this.name;
      document.getElementById("ownerCityDisplay").textContent = this.city;
      document.getElementById("petNameDisplay").textContent = this.petName;
      document.getElementById("petTypeDisplay").textContent = this.petType;
    }
  };
}