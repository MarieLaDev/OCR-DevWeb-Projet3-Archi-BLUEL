import { fetchAPI } from "./fetchAPI.js";

/**
 * Gère l'ajout de projet dans la modale
 */
export async function gererAjouts() {

     const btnAjoutProjet = document.getElementById("valider-ajout");
     
     /*suppr.addEventListener("click", async (event) => {
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
     }*/
}

/**
 * Gère l'affichage de la fenêtre d'ajout de projets
 */
async function afficherAjoutModale() {
     // Récupére les éléments sur lesquels on souhaite retirer la classe hidden
     const elementsRetireHidden = document.querySelectorAll(".fa-arrow-left, #modale-ajout");
     const elementsAjoutHidden = document.getElementById("modale-galerie");

     const ajImgProjet = document.getElementById("file-input");
     const ajTitreProjet = document.getElementById("titre-projet");
     const ajCategorieProjet = document.getElementById("categorie-ajout");

     // Afficher les éléments de la modale ajout et masquer les éléments de la modale suppression
     elementsRetireHidden.classList.remove("hidden");
     elementsAjoutHidden.classList.add("hidden");
     
     /*boutonModif.addEventListener("click", (event) => {
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

     })*/
}