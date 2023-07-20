
import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
function pageHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const resturant = document.createElement('h1');
    resturant.classList.add('resturant-name');
    resturant.textContent = 'Burger King';

    header.appendChild(resturant);
    header.appendChild(createNavbar());

    return header;
}

function createNavbar(){
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    home.classList.add('nav-button');
    home.innerText = 'Home';
    home.addEventListener('click', loadHome);
   
    const menu = document.createElement('button');
    menu.classList.add('nav-button');
    menu.textContent = 'Menu';

    menu.addEventListener('click', loadMenu);
   
    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.textContent = 'Contact';
    contact.addEventListener('click', loadContact);
   
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('nav-button');
    buttons.forEach((button) =>{
        if(button !==this){
            button.classList.remove('active');
        }

    });
    button.classList.add('active');
}
function createMain() {
    
   
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
   
    return main;
  }
 
  function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(pageHeader());
    content.appendChild(createMain());
   
  
    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
  }
  
  initializeWebsite();
  export default initializeWebsite;