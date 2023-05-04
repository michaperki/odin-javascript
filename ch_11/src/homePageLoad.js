// initial home page function

export function homePageLoad() {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const homeText = document.createElement("p");
    homeText.textContent = "Welcome to Mike's Steak House! We have the best steaks in town!";
    homeText.classList.add("home-text");

    main.appendChild(homeText);
}