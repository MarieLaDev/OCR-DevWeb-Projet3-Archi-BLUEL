import { fetchAPI } from "./fetchAPI.js";

async function gererConnexion() {
     const formConnex = document.querySelector("form");
     
     formConnex.addEventListener("submit", async (event) => {
          event.preventDefault();
          
          // récupére la valeur de l'input email
          const email = document.querySelector("input[id='email']").value;
          // récupère la valeur de l'input password
          const password = document.querySelector("input[id='password']").value;
          
          console.log(`L'email est ${email} et le mot de passe est ${password}`);
          
          /* On attends en body un format
          {"email": "string", "password": "string"}
          */
          
          // Construit et prépare le body pour l'API
          const body = JSON.stringify({email, password});
          console.log(body);
     
          // Crée l'objet pour le post
          let objetLogin = {
               method: "POST",
               body,
               headers: { "Content-Type": "application/json" }
               };
          console.log(objetLogin);
          
          // Poster à l'API et attendre la réponse
          const reponse = await fetchAPI("users/login", objetLogin);

          // Mettre en forme et stocker dans le sessionStorage
          sessionStorage.setItem("token", JSON.stringify(reponse));
          
          // Récupérer le token dans local storage
          let token = sessionStorage.getItem("token");
          // JSON.parse() pour transformer un session ou local storage en objet JavaScript
          token = JSON.parse(token);
          console.log("Le Token de sessionStorage est : ")
          console.log(token.token);
     });
     
          
     
     
          /* Si besoin de stocker dans le localStorage organiser l'objet en json avec : const nomConstante = JSON.stringify(nomVariable); puis stocker dans le localStorage localStorage.setItem("nomConstante");*/

}

// Appeler la fonction de gestion de la connexion
gererConnexion();