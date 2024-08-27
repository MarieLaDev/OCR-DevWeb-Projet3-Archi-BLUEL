import { fetchAPI } from "./fetchAPI.js";

/**
 * Gère la connexion pour la modification des projets
 * Envoie un POST à l'API avec le login et le mot de passe
 *  du token en sessionStorage
 */
async function gererConnexion() {
     const formConnex = document.querySelector("form");
     
     // "Ecoute" le submit du formulaire de connexion
     formConnex.addEventListener("submit", async (event) => {
          event.preventDefault();
          
          // récupére la valeur de l'input email
          const email = document.querySelector("input[id='email']").value;
          // récupère la valeur de l'input password
          const password = document.querySelector("input[id='password']").value;
          
          console.log(`L'email est ${email} et le mot de passe est ${password}`);
          
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
          
          try {
               // Poster à l'API et attendre la réponse
               let token = await fetchAPI("users/login", objetLogin);

               console.log(token);
               let stockToken = JSON.stringify(token.token);
               console.log(stockToken);
               
               // Mettre en forme et stocker le token dans le sessionStorage
               sessionStorage.setItem("token", stockToken);
               
          } catch(error) {
               alert("Il y a une erreur dans le login ou le mot de passe, vous n'avez pas l'accès");
          }         
          // retourner sur index.html
          window.location.href = "../../index.html";
     });
}

// Appeler la fonction de gestion de la connexion
gererConnexion();