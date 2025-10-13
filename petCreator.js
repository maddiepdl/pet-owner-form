console.log("Hello from petCreator.js!");

// factory function for pet object
function createPet(name, age, species) {
  return {
    name,
    age,
    species,
    energy: 50,      // starting energy 
    happiness: 50,   // starting happiness

    // method to show current status
    status() {
      console.log(`Status of ${this.name}:`);
      console.table({
        Name: this.name,
        Age: this.age,
        Species: this.species,
        Energy: this.energy,
        Happiness: this.happiness
      });
    },

    // method to feed and increase energy
    feed() {
      this.energy += 10;
      console.log(`${this.name} was fed. Energy is now ${this.energy}.`);
    },

    // method to play and increase happiness
    play() {
      if (this.energy >= 10) {
        this.happiness += 10;
        this.energy -= 10;
        console.log(`${this.name} played! Happiness: ${this.happiness}, Energy: ${this.energy}`);
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
    },

    // method for pet HTML
    html() {
      const petHTML = `
        <div>
          <h3>${this.name}</h3>
          <p>Species: ${this.species}</p>
          <p>Age: ${this.age}</p>
          <p>Energy: ${this.energy}</p>
          <p>Happiness: ${this.happiness}</p>
        </div>
      `;
      console.log(`Generated HTML for ${this.name}:`, petHTML);
      return petHTML;
    }
  };
}