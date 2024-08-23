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
          
          // Poster à l'API et attendre la réponse
          const token = await fetchAPI("users/login", objetLogin);
          console.log(token);
          // Mettre en forme et stocker le token dans le sessionStorage
          sessionStorage.setItem("token", JSON.stringify(token));
          console.log(sessionStorage.getItem("token"));
          
          
          /********** Chercher pourquoi le token est null******/
          
          // retourner sur index.html
          window.location.href = "../../index.html";
     });
}

// Appeler la fonction de gestion de la connexion
gererConnexion();