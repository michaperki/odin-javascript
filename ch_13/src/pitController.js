// pitController
//   - purely in the console for now
//   - will be used to create, update, and delete pits

// should I have a separate module to display the pits?

export const pitController = (() => {
  // array to hold pit objects
  var pits = [];
  // function to add a pit to the array
  function addPit(name, url) {
    pits.push(pit(name, url));
  }
  // function to remove a pit from the array
  function removePit(name) {
    pits = pits.filter((pit) => pit.name !== name);
  }
  // function to update a pit in the array
  function updatePit(name, newName, newUrl) {
    pits.forEach((pit) => {
      if (pit.name === name) {
        pit.name = newName;
        pit.url = newUrl;
      }
    });
  }
  // function to display all pits in the array as a list
  function displayPits() {
    // print a header
    console.log("Pits:");
    pits.forEach((pit) => {
      displayPit(pit.name);
    });
  }
  // function to display a single pit in the array
  function displayPit(name) {
    pits.forEach((pit) => {
      if (pit.name === name) {
        console.log(pit.displayPit());
      }
    });
  }

  // add a getter for the pits array
  function getPits() {
    return pits;
  }

  // return the functions
  return {
    addPit,
    removePit,
    updatePit,
    displayPits,
    displayPit,
    getPits,
  };
})();

// factory function to generate a pit object
function pit(name, url) {
  var pit = {
    name: name,
    url: url,
    createdOn: Date.now(),
    open: true,
  };
  // should have an anonymous function to close the pit and add a closedOn property
  pit.closePit = function () {
    pit.open = false;
    pit.closedOn = Date.now();
  };

  // should have a function to display the pit
  pit.displayPit = function () {
    console.log(pit.name, pit.url, pit.createdOn, pit.open, pit.closedOn);
  };
  return pit;
}
