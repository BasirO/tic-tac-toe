
function createCard(){
   
for( let i= 0; i<3; i++){
const card = document.createElement('div');
    card.classList.add('card');
    card.style.width ='30rem';
    card.appendChild(
        createMenuItem(
           'Humburger',"images/popl_burger.jpg",'This Humburger is made Bull meat, potato, tomato and white souce Try it once!'
        )
    );
    card.appendChild(
        createMenuItem(
           'Beyond meat burger',"images/burger_0.jpg",'Consectetur adipiscing elit Praesent mattis est eget turpis.Consectetur adipiscing elit Praesent mattis est eget turpis.'
        )
    );
    card.appendChild(
        createMenuItem(
           'Elk burger',"images/Elk.jpg",'Praesent mattis est eget turpis Consectetur adipiscing elit Praesent mattis est eget turpis.'
        )
    );
    return card;
        }
    

}
function createMenuItem(name,img, description) {
    const foodimg = document.createElement('img');
    foodimg.classList.add('card-img-top');
    foodimg.src = img;
   
    const menuItem = document.createElement("div");
    menuItem.classList.add("card-body");
    
    const foodName = document.createElement("h3");
    foodName.classList.add("card-title");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.classList.add("card-text");
    foodDescription.textContent = description;
  
   
    menuItem.appendChild(foodimg);
   
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createCard());
  }
export default loadMenu;
