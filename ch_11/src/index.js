// index.js

import { homePageLoad } from "./homePageLoad.js";
import { menuPageLoad } from "./menuPageLoad.js";
import { contactPageLoad } from "./contactPageLoad.js";

// import style sheet
import "./style.css";

// get the initialPageLoad function from the pageLoad module
import { initialPageLoad } from "./PageLoad.js";

console.log("Hello, world!");

initialPageLoad();

// logic for nav buttons
const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "Home") {
            homePageLoad();
        } else if (button.textContent === "Menu") {
            menuPageLoad();
        } else if (button.textContent === "Contact") {
            contactPageLoad();
        }
    });
});



// end of file

