function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// 


// Message onclick submit
// const elt = document.getElementsByClassName('button');    // On récupère l'élément sur lequel on veut détecter le clic
// elt.addEventListener('click', function() {          // On écoute l'événement click
//     elt.innerHTML = "Merci ! Vous êtes bien enregistré.";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
// });


