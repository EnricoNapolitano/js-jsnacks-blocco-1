/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.
comunicagli se può partecipare o no alla festa. (vietato usare includes() ) */


// Element from DOM
const nameElement = document.getElementById("name");
const buttonElement = document.getElementById("button");
const messageElement = document.getElementById("message");

// Party List
const partyList = ["luca", "mattia", "maria", "giovanna"];


buttonElement.addEventListener('click', function(){

    const userName = nameElement.value.toLowerCase().trim();

    //Validation
    if(!isNaN(userName)) {
        messageElement.innerText = "non hai inserito un nome";
        return;
    }

 
    // Flag - check list
    let isAllowed = false;

    for (let i=0; i < partyList.length; i++) {
        const currentName = partyList[i];

        if (currentName === userName) {
            console.log('is allowed : vero');
            isAllowed = true;
        }
    }

    if (isAllowed) {
        messageElement.innerText = "Il tuo nome è nella lista, benvenuto al party!";
    } else {
        messageElement.innerText = "Mi dispiace, non sei in lista."
    }

})
