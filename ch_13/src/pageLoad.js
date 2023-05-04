// initial page load function

export function initialPageLoad() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    header.textContent = "Betting App";
    header.classList.add("header");
    content.appendChild(header);


    const footer = document.createElement("footer");
    footer.classList.add("footer");
    content.appendChild(footer);

    const footerText = document.createElement("p");
    footerText.textContent = "© 2023 by Mike Perkins";
    footer.appendChild(footerText);


}