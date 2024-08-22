import { getAPI } from "./getAPI.js";

function gererConnexion() {
     const btnConnex = document.getElementById("btnConnex");

     
     btnConnex.addEventListener("click", (event) => {
          event.preventDefault();
          // récupére l'input email
          const emailInput = document.querySelector("input[id='email']");
          // récupère l'input password
          const passwordInput = document.querySelector("input[id='password']");

          // Récupère les valeurs
          const email = emailInput.value;
          const password = passwordInput.value;
          
          // Construit un objet body
          const objetBody = {"email": email, "password": password};
          console.log(objetBody);
          
          /* On attends en body un format
          {"email": "string", "password": "string"}
          */
          
          // Prépare le body
          const body=JSON.stringify(objetBody);
          console.log(body);
     
          // Crée l'objet pour le post
          let objetLogin = {
               method: "POST",
               body,
               headers: { "Content-Type": "application/json" }
               };

          console.log(objetLogin);
          
          try {
               const reponseLogin = getAPI("users/login", objetLogin);
               console.log(reponseLogin);
          } catch(error) {
               alert(error);
          }
     });
     
          
     
     
     
     
     
          /* Si besoin de stocker dans le localStorage organiser l'objet en json avec : const nomConstante = JSON.stringify(nomVariable); puis stocker dans le localStorage localStorage.setItem("nomConstante");*/

}

// Appeler la fonction de gestion de la connexion
gererConnexion();