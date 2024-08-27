import { fetchAPI } from "./fetchAPI.js";
import { attendreDOM } from "./attendreDOM.js";

export async function gererModale() {
     // Appeler l'affichage de la modale
     await afficherModale().then( () => {
          supprimerProjet();
          attendreDOM(clicGalerieAjoutPhoto);


     });     
}

function clicGalerieAjoutPhoto() {
     const btnAjout = document.getElementById("ouvrir-ajout");
     
     console.log(btnAjout);
     // Ecouter le clic du bouton "ajouter une photo"
     btnAjout.addEventListener("click", (event) => {
          event.preventDefault();
          modaleAjout=document.getElementById("modale-ajout");
          modaleAjout.classList.remove("hidden");
     });
}

/**
 * Gère les supression de l'utilisateur bénéficiant du token
 */
async function supprimerProjet() {
     // appeler l'affichage de la modale
     //await afficherModale();

     // Gerer les suppressions d'images
     let poubelles = document.querySelectorAll(".work div i");

     for (let suppr of poubelles) {
          suppr.addEventListener("click", async (event) => {
               event.preventDefault();
               
               // Cherche l'élément "parent" le plus proche ayant une classe work avec closest() <= à retenir
               const projetMini = suppr.closest(".work");

               // Récupère le numéro du projet (ID du work)
               let idproj = projetMini.dataset.projetnum;
               console.log(`L'ID du projet est ${idproj}`);
               
               // Récupère l'objet figure de la page index
               const projet = document.getElementById("p"+idproj);
               console.log(projet);

               // Cache le projet dans miniatures et galerie
               projet.classList.add("hidden");
               projetMini.classList.add("hidden");
               
               // Transforme idproj en integer pour l'API
               idproj=parseInt(idproj);

               // Récupérer le token pour l'API
               let token = sessionStorage.getItem("token");
               
               // retire les guillemets autour du token (sinon génère une erreur API)
               token = JSON.parse(token);
               console.log("Le token est " + token);

               // Créer l'objet pour l'API
               let objetSuppr = {
                    method: "DELETE",
                    headers: { 
                    "Authorization": `Bearer ${token}`
                    }
               };

               try {
                    // Envoyer le DELETE à l'API et attendre la réponse
                    let reponse = await fetchAPI(`works/${idproj}`, objetSuppr);

                    console.log(reponse);
                    
               } catch(error) {
                    console.log("Il y a eu une erreur dans l'appel API => " + error);
               }  
          });
     }
}

/**
 * Gère la présence du token, si oui : affichage de la barre
 * mode édition, les boutons filtres passent en hidden
 * le bouton modifier s'affiche. Ecoute du clic pour 
 * afficher la fenêtre modale
 */
async function afficherModale() {
     return new Promise(async(resolve, reject) => {
          // Récupérer le token dans session storage
          let token = sessionStorage.getItem("token");

          if (token !== null) {
               // JSON.parse() inutile, j'ai enregistré le token comme une chaine string pas un json
               console.log(`Le Token est : ${token}`);

               const divToken = document.querySelector(".token");
               const header = document.querySelector("header");
               const boutonModif = document.querySelector(".titre-galerie a");
               const zoneFiltres = document.querySelector(".btn-zone");
               
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

                    // Appeler le resolve de la promesse après que tous les éléments ont été ajoutés
                    resolve();
               })
          }
     });

}