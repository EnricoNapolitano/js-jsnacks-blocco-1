/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.
comunicagli se può partecipare o no alla festa. (vietato usare includes() ) */


// Element from DOM
const nameElement = document.getElementById("name");
const buttonElement = document.getElementById("button");

const partyList = ["Luca", "Mattia", "Maria", "Giovanna"];


buttonElement.addEventListener('click', function(){
    const userName = nameElement.value;
    console.log(userName);

})