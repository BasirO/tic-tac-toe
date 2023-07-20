import'./style.css';
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const burgur = document.createElement("img");
    burgur.classList.add('burger');
    burgur.src = "images/burgur.jpg";
    burgur.alt = "Burger";
  
    home.appendChild(createParagraph("Best Burger In The World!"));
    home.appendChild(createParagraph("Made with Style And Passion"));
    home.appendChild(burgur);
    home.appendChild(createParagraph("Order online or visit us!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;