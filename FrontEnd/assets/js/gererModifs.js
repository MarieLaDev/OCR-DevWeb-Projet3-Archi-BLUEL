export function gererModifs() {
     // Récupérer le token dans local storage
     let token = sessionStorage.getItem("token");
     if (token !== null) {
          // JSON.parse() inutile, le token est une chaine string pas un json
          console.log(`Le Token est : ${token}`);

          const divToken = document.querySelector(".token");
          const header = document.querySelector("header");
          const boutonModif = document.querySelector(".titre-galerie a");
          const zoneFiltres = document.querySelector(".btn-zone");
          console.log(divToken);
          divToken.classList.remove("hidden");
          header.style.marginTop = "6.5em";
          boutonModif.classList.remove("hidden");
          zoneFiltres.classList.add("hidden");
          
          boutonModif.addEventListener("click", (event) => {
               // Utiliser event ou e dans la fonction fléchée de addEventListener si besoin de l'event par exemple pour identifier l'élément cliqué ou utiliser preventDefault
               event.preventDefault();
               // récupérer l'ID modale
               const modale = document.getElementById("modale");
               // ajoute la classe active (display:flex;)
               modale.classList.add("active");

               const arrierePlan = document.getElementById("arriere");
                                   
               // rendre active l'opacification de l'arrière plan
               arrierePlan.classList.add("arriere-plan");
               
               // Afficher les projets en miniature avec des poubelles dessus

               const closeModale = document.getElementById("close-modale");

               closeModale.addEventListener("click", (event) => {
                    event.preventDefault();
                    // retirer l'arrière plan opacifié
                    arrierePlan.classList.remove("arriere-plan");
                    modale.classList.remove("active");
               });

               arrierePlan.addEventListener("click", (event) => {
                    event.preventDefault();
                    // retirer l'arrière plan opacifié
                    arrierePlan.classList.remove("arriere-plan");
                    modale.classList.remove("active");
               });

               // ajouter fermeture si clic en dehors de la modale

          })
     }
}
