const email = document.getElementById('email');

// SHOW/HIDE PASSWORD
const passwordBloc = document.querySelectorAll('.password-input');

passwordBloc.forEach(bloc => {
    bloc.lastElementChild.addEventListener('click', function() {
        if (bloc.firstElementChild.type == "password") {
            bloc.firstElementChild.type = "text";
            bloc.lastElementChild.children[0].src = bloc.lastElementChild.children[0].src.replace("show", "hide");
        } else {
            bloc.firstElementChild.type = "password";
            bloc.lastElementChild.children[0].src = bloc.lastElementChild.children[0].src.replace("hide", "show");
        }
    })
});

// VERIFICATION EMAIL VALIDE
const emailValue = email.value;
email.addEventListener('input', (e) => {
    let validEmail = false;
    let value = e.target.value;
    mailVerification(value);
    console.log(value);
})
console.log('emailValue', emailValue);

const mailVerification = mailAdress => {
    const verif = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (verif.exec(mailAdress) == null) {
        alert("Mail incorrecte");
        validEmail = false;
    }
    else {
        validEmail = true;
    }
}

// VERIFICATION MDP VALIDE
// Regexp vérifiant mdp de 8 à 16 caractères avec au moins 1 lettre, 1 chiffre et une majuscule

// MESSAGE REINITIALISATION MDP
// Si e-mail valide, au click sur le bouton, affichage d'un message indiquant qu'un mail a été envoyé à l'adresse indiqué.