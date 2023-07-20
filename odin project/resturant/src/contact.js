

function createContact(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
   
    const phone = document.createElement('p');
    phone.classList.add('contact-details');
    phone.textContent ='+1 694593024' ;

    const email = document.createElement('p');
    email.classList.add('contact-details');
    email.textContent ='something@gmail.com';

    const addr = document.createElement('p');
    addr.classList.add('contact-details');
    addr.textContent = 'Unknown Location';

    const contact =document.createElement('h1');
    contact.classList.add('contact-header');
    contact.textContent = 'Contact';

    const address =document.createElement('h1');
    address.classList.add('contact-header');
    address.textContent = 'Address';

    contactDiv.appendChild(contact);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    contactDiv.appendChild(address);
    contactDiv.appendChild(addr);

    return contactDiv;
}

function loadContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}
export default loadContact;