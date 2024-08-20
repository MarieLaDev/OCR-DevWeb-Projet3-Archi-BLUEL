export function genererFenetreLogin() {
     // Récupérer la balise main pour afficher le formulaire de login
     const baliseMain = document.querySelector("main");
     // Récupérer les sections pour leur ajouter la classe .hidden à l'affichage du formulaire
     const sections = document.querySelectorAll("section");
     
     // Récupérer les balise a du menu
     const menu = document.querySelectorAll("nav ul li a");
     console.log(menu);

     // Parcourir les liens du menu
     menu.forEach(lien => {
          // Chercher le lien qui correspond à "login"
          const clicLien = lien.textContent
          const lienLogin = (clicLien === "login");
          console.log("le lien se nomme " + clicLien + " l'écoute du lien sera donc " + lienLogin)
          
          // S'il s'agit du lien "login" alors écouter le clic
          if (lienLogin) {
               lien.addEventListener("click", () => {
                    
                    // Afficher le formulaire de connexion
                    alert("Afficher la fenêtre \"Login\"");

                    console.log("La fenêtre a été affichée");
               });
          }
     });
}