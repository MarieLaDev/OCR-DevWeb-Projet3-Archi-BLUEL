import { fetchAPI } from "./fetchAPI.js";

/**
 * Gère l'ajout de projet dans la modale
 */
export async function gererAjouts() {

     const btnAjoutProjet = document.getElementById("valider-ajout");
     
     btnAjoutProjet.addEventListener("click", async (event) => {
               event.preventDefault();
               
               /*// Cherche l'élément "parent" le plus proche ayant une classe work avec closest() <= à retenir
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
               }  */
     });
}