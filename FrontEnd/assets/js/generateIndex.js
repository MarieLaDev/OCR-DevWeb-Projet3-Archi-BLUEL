import { fetchAPI } from "./fetchAPI.js";
import { utils } from "./utils.js";

document.addEventListener('DOMContentLoaded', generateIndex);

export async function generateIndex() {
     // Lance GET dans l'API works await réponse => async fonction
     const works = await fetchAPI('works');

     //**** Tableau des catégories ****/ & déclare le set() (entrée unique)
     let categories = [{"id" : 0, "name" : "Tous"},];
     let addCategory = new Set();

     for (let work of works) {
          utils.displayOneWork(work);
          utils.setFiltersCatgories(work, addCategory, categories);
     }
     console.log(categories);

     // Créer les filtres
     utils.createFiltersBtns(categories);
     utils.filterClick(works);

     // Récupérer le token dans local storage
     let token = JSON.parse(localStorage.getItem("token"));

     utils.editMode(token);

     utils.showHideModal();
     
     // Ecouteur des clics trashs
     let trashs = document.querySelectorAll(".trash-work");
     for (let del of trashs) {
          del.addEventListener("click", async (event) => {
               event.preventDefault();
               const id = del.id;
               utils.deleteOneWork(id, token);
          });
     }
     
     utils.displayModaleAdd();

     utils.createWork(token);
}
