import { getAPI } from "./getAPI.js";

export async function genererGalerie() {
     // Lancement du GET dans l'API works await pour attendre la réponse + GET des catégories
     const works = await getAPI('works');
     
     // Récupération de l'élément DOM de la galerie qui accueillera les "work(s)"
     const gallery = document.querySelector(".gallery");

     for (let i = 0; i < works.length; i++) {
          const work = works[i];

          // Création du conteneur pour les éléments du "work"
          const contenerWork = document.createElement("figure");

          // Création des éléments dans le conteneur "work"
          const imgWork = document.createElement("img");
          imgWork.src = work.imageUrl;
          imgWork.setAttribute("alt", work.title); // Ajout de la balise alt à l'image
          const titleWork = document.createElement("figcaption");
          titleWork.innerText = work.title;

          // ajout des éléments
          contenerWork.setAttribute("workid", work.id);
          contenerWork.setAttribute("userid", work.userId);
          contenerWork.setAttribute("categoryid", work.category.id)

          // Rattacher les éléments pour chaque "work"
          contenerWork.appendChild(imgWork);
          contenerWork.appendChild(titleWork);

          // Ajouter le conteneur à la galerie
          gallery.appendChild(contenerWork);
     }
}