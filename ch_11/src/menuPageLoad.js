// initial menu page function

export function menuPageLoad() {
    
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const menuText = document.createElement("p");
    menuText.textContent = "Menu";
    menuText.classList.add("menu-text");


    main.appendChild(menuText);
}