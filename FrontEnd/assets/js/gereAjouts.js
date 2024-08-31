import { fetchAPI } from "./fetchAPI.js";

/**
 * Gère l'ajout de projet dans la modale
 */
export async function gererAjouts() {

     let imageChoisie = document.getElementById("files");

     imageChoisie.addEventListener("change", (event) => {
          event.preventDefault();
          
          let affichageImage = document.querySelector(".zone-ajout");
          let cacherElements = document.querySelectorAll(".fa-image, .btn-file, .zone-ajout p");
          for (let element of cacherElements) {
               element.classList.add("hidden");
          }
          
          showFile(imageChoisie, affichageImage);
     });
     
     const categories = await fetchAPI("categories");
     console.log(categories);

     let selectCategorie = document.getElementById("categorie-ajout");
     
     for (let categorie of categories) {
          
          const optionCategorie = document.createElement("option");
          optionCategorie.value = categorie.name;
          optionCategorie.textContent = categorie.name;

          selectCategorie.appendChild(optionCategorie);
     }

               /* pour vider l'image à la validation fonction viderImage() dans gererModale
               let affichageImage = document.querySelector(".zone-ajout");

               // Vérifier si une image est déjà affichée et la retirer
               let existingImage = affichageImage.querySelector("img");
               if (existingImage) {
                    affichageImage.removeChild(existingImage);
               } */
               
                              
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
}


function showFile(input, affichageImage) {
     
          let file = input.files[0];
   
          console.log(`File name: ${file.name}`); // e.g my.png
          
          let reader = new FileReader();

          reader.readAsDataURL(file);
     
          reader.onload = function() {
               // Récupérer la zone d'affichage
               let affichageImage = document.querySelector(".zone-ajout");

               // Vérifier si une image est déjà affichée et la retirer
               let existingImage = affichageImage.querySelector("img");
               if (existingImage) {
                    affichageImage.removeChild(existingImage);
               }

               // Construire la miniature
               let img = document.createElement("img");
               img.src = reader.result;
               img.classList.add("image-ajout");

               // Afficher la miniature
               affichageImage.appendChild(img);
          };
     
          reader.onerror = function() {
          console.log(reader.error);
          };
}