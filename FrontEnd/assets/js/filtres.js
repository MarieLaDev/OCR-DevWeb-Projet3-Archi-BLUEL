import { getAPI } from "./getAPI.js";

// Génération des bouton filtres et filtre les résultats


export async function genererBtnFiltre() {
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
          const btnFiltre = document.createElement("a");
          btnFiltre.className = "filter-btn";
          
          // Le texte dans la balise a élément.textcontent = ""
          btnFiltre.textContent = listeCategorie[i].name;
          // Mettre le filtre dans le contFiltres
          contFiltres.appendChild(btnFiltre);
     }  
}