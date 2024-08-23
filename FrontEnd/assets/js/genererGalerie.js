import { fetchAPI } from "./fetchAPI.js";

export async function genererGalerie() {
     // Essayer de générer la gallerie ou générer l'erreur système
     try {
          // Lancement du GET dans l'API works await pour attendre la réponse
          const works = await fetchAPI('works');
          
          console.log(works);
          
          // Récupération de l'élément DOM de la galerie qui accueillera les "work(s)"
          const gallery = document.querySelector(".gallery");

          for (let work of works) {
               // Création du conteneur pour l'éléments "work"
               const contenerWork = document.createElement("figure");
               // ajout des data-* à figure
               contenerWork.id = work.id;
               contenerWork.dataset.userid = work.userId;
               contenerWork.dataset.categoryid = work.category.id;
               contenerWork.dataset.categoyName = work.category.name;

                              
               // Création des éléments dans le conteneur "work"
               // L'image avec son src et alt
               const imgWork = document.createElement("img");
               imgWork.src = work.imageUrl; // Ajout de lURL de l'image
               imgWork.alt = work.title; // Ajout de la balise alt à l'image
               
               // Le titre du projet
               const titleWork = document.createElement("figcaption");
               // Utiliser textContent pour que le DOM "enregistre" l'élément quelque soit le style par exemple, avec un style "hidden" innerText le titleWork serait vide
               titleWork.textContent = work.title;

               // Rattacher les éléments pour chaque "work"
               contenerWork.appendChild(imgWork);
               contenerWork.appendChild(titleWork);

               // Ajouter le conteneur à la galerie
               gallery.appendChild(contenerWork);
          }
          // Si la fonction échoue créer l'erreur
          
     } catch (error) {
          // Afficher le message d'erreur avec alert pour récupérer l'erreur créée avec throw new Error il faut ${error.message} error seul ne suffit pas
          alert(`Erreur : ${error.message}`);
     }

}