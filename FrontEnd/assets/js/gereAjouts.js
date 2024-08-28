import { fetchAPI } from "./fetchAPI.js";

/**
 * Gère l'ajout de projet dans la modale
 */
export async function gererAjouts() {

     const btnAjoutImage = document.getElementById("files");
     
     btnAjoutImage.addEventListener("change", async (event) => {
               event.preventDefault();
               
                              
               /*
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