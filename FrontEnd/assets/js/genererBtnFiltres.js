import { getAPI } from "./getAPI.js";
import { gererClicsFiltres } from "./gererClicsFiltres.js";

// Génération des bouton filtres et filtre les résultats


export async function genererBtnsFiltres() {
     const portfolio = document.getElementById("portfolio");
     // Selection du h2 du portfolio
     const titre = portfolio.querySelector("h2");

     // Crée la div des boutons filtres
     const contFiltres = document.createElement("div");
     contFiltres.className = "btn-zone" 
     
     // Insérer le conteneur de filtre après le h2
     titre.insertAdjacentElement("afterend", contFiltres);

     // Création d'un objet listeCategorie avec "Tous"
     let listeCategorie = [{"id" : 0, "name" : "Tous"},];
     console.log(listeCategorie);
     
     // Récupère les catégories
     const categories = await getAPI("categories");

     // Ajouter 1 par 1 les éléments
     listeCategorie.push(...categories);
     console.log(listeCategorie);

     // Créer les boutons dans boucle for
     for (let i=0; i < listeCategorie.length; i++) {
          // crée la balise a avec le nom des catégories
          const genereFiltre = document.createElement("a");
          genereFiltre.setAttribute("href", "#");
          genereFiltre.className = "filter-btn";
          
          if (i === 0) {
               genereFiltre.className = "focus";
          } else {
               genereFiltre.className = "filter-btn";
          }
          
          /*console.log(genereFiltre);*/
          
          // Le texte dans la balise a element.textcontent = "..."
          genereFiltre.textContent = listeCategorie[i].name;
          genereFiltre.name = listeCategorie[i].name;
          genereFiltre.setAttribute("id", listeCategorie[i].id )

          // Mettre les btn filtres dans le contFiltres
          contFiltres.appendChild(genereFiltre);
     }
     gererClicsFiltres();
}