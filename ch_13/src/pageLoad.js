// initial page load function
// load the betting menu

import { pitController } from "./pitController";

export function initialPageLoad() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.textContent = "Betting";
  header.classList.add("header");
  content.appendChild(header);

  // add a nav button to the header
  const navButton = document.createElement("button");
  navButton.classList.add("nav-button");
  navButton.textContent = "\u2630";
  header.appendChild(navButton);

  const nav = document.createElement("nav");
  nav.classList.add("nav");
  content.appendChild(nav);

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");
  nav.appendChild(navList);

  const home = document.createElement("li");
  home.classList.add("nav-item");

  const homeLink = document.createElement("a");
  homeLink.classList.add("nav-link");
  homeLink.textContent = "Home";
  homeLink.setAttribute("href", "#");
  home.appendChild(homeLink);
  navList.appendChild(home);

  const menu = document.createElement("li");
  menu.classList.add("nav-item");

  const menuLink = document.createElement("a");
  menuLink.classList.add("nav-link");
  menuLink.textContent = "Menu";
  menuLink.setAttribute("href", "#");
  menu.appendChild(menuLink);
  navList.appendChild(menu);

  const contact = document.createElement("li");
  contact.classList.add("nav-item");
  const contactLink = document.createElement("a");
  contactLink.classList.add("nav-link");
  contactLink.textContent = "Contact";
  contactLink.setAttribute("href", "#");
  contact.appendChild(contactLink);
  navList.appendChild(contact);

  // the nav is hidden by default
  nav.style.display = "none";

  // add a form listener to the nav button
  navButton.addEventListener("click", () => {
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });

  const main = document.createElement("main");
  main.classList.add("main");

  content.appendChild(main);

  // use the pitController to display all pits
  pitController.displayPits();

  // display the pits in the main section
  // the pit controller is a module that holds an array of pit objects, it does not manipulate the DOM
  // the DOM is manipulated here in the initialPageLoad function

  // create a div to hold the pits
  const pitContainer = document.createElement("div");
  pitContainer.classList.add("pit-container");
  main.appendChild(pitContainer);

  // display the pits in the pit container
  displayPits();

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  content.appendChild(footer);

  const footerText = document.createElement("p");
  footerText.textContent = "© 2023 by Mike Perkins";
  footer.appendChild(footerText);

  // put the form in a form-container div
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  main.appendChild(formContainer);

  const pitForm = document.createElement("form");
  pitForm.classList.add("pit-form");
  pitForm.setAttribute("action", "#");
  pitForm.setAttribute("method", "post");
  pitForm.setAttribute("id", "pit-form");
  formContainer.appendChild(pitForm);

  // hide the form container
  formContainer.style.display = "none";

  const pitNameLabel = document.createElement("label");
  pitNameLabel.classList.add("pit-name-label");
  pitNameLabel.setAttribute("for", "pit-name");
  pitNameLabel.textContent = "Pit Name";
  pitForm.appendChild(pitNameLabel);

  const pitNameInput = document.createElement("input");
  pitNameInput.classList.add("pit-name-input");

  pitNameInput.setAttribute("type", "text");
  pitNameInput.setAttribute("name", "pit-name");
  pitNameInput.setAttribute("id", "pit-name");

  pitForm.appendChild(pitNameInput);

  const pitUrlLabel = document.createElement("label");
  pitUrlLabel.classList.add("pit-url-label");
  pitUrlLabel.setAttribute("for", "pit-url");
  pitUrlLabel.textContent = "Pit URL";
  pitForm.appendChild(pitUrlLabel);

  const pitUrlInput = document.createElement("input");
  pitUrlInput.classList.add("pit-url-input");

  pitUrlInput.setAttribute("type", "text");
  pitUrlInput.setAttribute("name", "pit-url");

  pitForm.appendChild(pitUrlInput);

  const pitSubmit = document.createElement("input");
  pitSubmit.classList.add("pit-submit");
  pitSubmit.setAttribute("type", "submit");

  pitForm.appendChild(pitSubmit);

  // create a button to close the form
  const closeFormButton = document.createElement("button");
  closeFormButton.classList.add("close-form-button");
  closeFormButton.textContent = "X";
  formContainer.appendChild(closeFormButton);

  // add event listener to close form button
  // when the user clicks the close form button, make the form invisible
  closeFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.style.display = "none";
    // make the add pit button visible
    addPitButton.style.display = "block";
  });

  // add event listener to pit form
  // when the user submits the pit form, add a pit and make the form invisible
  // then display the pits

  pitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    pitController.addPit();
    addPit(pitNameInput.value, pitUrlInput.value);
    formContainer.style.display = "none";
    clearPitContainer();
    displayPits();
    // make the add pit button visible
    addPitButton.style.display = "block";
  });

  // the pits are duplicated every time the form is submitted
  // to fix this, clear the pit container before displaying the pits
  // create a function to clear the pit container
  function clearPitContainer() {
    const pitContainer = document.querySelector(".pit-container");
    while (pitContainer.firstChild) {
      pitContainer.removeChild(pitContainer.firstChild);
    }
  }

  // create a button to add a pit
  const addPitButton = document.createElement("button");
  addPitButton.classList.add("add-pit-button");
  addPitButton.textContent = "Add Pit";

  // I want the button to be at the top of the page
  // Right now, each time the user adds a pit, the button moves down

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  content.appendChild(buttonContainer);

  // move the button into the button container
  buttonContainer.appendChild(addPitButton);

  // add event listener to add pit button
  // when the user clicks the add pit button, make the form visible
  // and make the add pit button invisible
  addPitButton.addEventListener("click", (e) => {
    e.preventDefault();

    formContainer.style.display = "block";
    addPitButton.style.display = "none";
  });
}

// create a function to display a pit
// create a function to display all pits
// create a function to add a pit
// create a function to remove a pit
// create a function to update a pit

function displayPit(pit) {
  const pitDiv = document.createElement("div");
  pitDiv.classList.add("pit");
  const pitName = document.createElement("h2");
  pitName.textContent = pit.name;
  pitDiv.appendChild(pitName);
  const pitUrl = document.createElement("a");
  pitUrl.setAttribute("href", pit.url);
  pitUrl.textContent = pit.url;
  pitDiv.appendChild(pitUrl);
  return pitDiv;
}

function displayPits() {
  const pits = pitController.getPits();
  const pitContainer = document.querySelector(".pit-container");
  pits.forEach((pit) => {
    pitContainer.appendChild(displayPit(pit));
  });
}

// create a function to add a pit
function addPit(name, url) {
  pitController.addPit(name, url);
  const pitContainer = document.querySelector(".pit-container");
  pitContainer.appendChild(
    displayPit(pitController.getPits()[pitController.getPits().length - 1])
  );
}
