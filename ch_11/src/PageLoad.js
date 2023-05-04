// initial page load function

export function initialPageLoad() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    header.textContent = "Mike's Steak House";
    header.classList.add("header");
    content.appendChild(header);

    const nav = document.createElement("nav");
    nav.classList.add("nav");
    content.appendChild(nav);

    const home = document.createElement("button");
    home.textContent = "Home";
    home.classList.add("nav-button");
    nav.appendChild(home);
    
    const menu = document.createElement("button");
    menu.textContent = "Menu";
    menu.classList.add("nav-button");
    nav.appendChild(menu);

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    contact.classList.add("nav-button");
    nav.appendChild(contact);

    const main = document.createElement("main");
    main.classList.add("main");
    content.appendChild(main);

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    content.appendChild(footer);

    const footerText = document.createElement("p");
    footerText.textContent = "© 2021 Mike's Steak House";
    footer.appendChild(footerText);

    home.addEventListener("click", () => {
        const main = document.querySelector(".main");
        main.innerHTML = "";
        const homeText = document.createElement("p");
        homeText.textContent = "Welcome to Mike's Steak House! We have the best steaks in town!";
        homeText.classList.add("home-text");
        main.appendChild(homeText);
    }
    );
}