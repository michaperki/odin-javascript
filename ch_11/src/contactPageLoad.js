// initial contact page function

export function contactPageLoad() {
        
        const main = document.querySelector(".main");
        main.innerHTML = "";
    
        const contactText = document.createElement("p");
        contactText.textContent = "Contact";
        contactText.classList.add("contact-text");

        main.appendChild(contactText);
}