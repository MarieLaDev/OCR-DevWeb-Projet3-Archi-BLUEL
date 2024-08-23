import { fetchAPI } from "./fetchAPI.js";

/****************************************** 
 * REVOIR data à la place de setAttribute *
 * ****************************************/



/**
 * Gère les boutons filtres de la page index.html la variable btnsFiltres permettra de récupérer les catégories pour l'ajout de projets
 */
export function gererFiltres() {
     try {
          // générer d'abord les boutons avec la fonction genererBtnsFiltres puis...
          genererBtnsFiltres().then(() => {
               
               // Récupérer les éléments boutons
               let btnsFiltres = document.querySelectorAll(".btn-zone a");
               // Transforme btnsFiltres en tableau
               console.log(btnsFiltres);
          
               // Pour parcourir les éléments avec for of     
               for (let filtre of btnsFiltres) {
                    // Pour chaque filtre du tableau btnsFiltes "écouter" le clic
                    filtre.addEventListener("click", (event) => {
                         // récupérer le bouton cliqué
                         const clickedBtn = event.target;
                         console.log(clickedBtn);
                         console.log("Le bouton cliqué est : " + clickedBtn.name + " et son ID est " + clickedBtn.id);

                         // on ajoute la class "focus" & retire la class "filter-btn" sur le bouton cliqué
                         clickedBtn.classList.add("focus"); 
                         clickedBtn.classList.remove("filter-btn");
                         console.log("On change les class sur le bouton " + clickedBtn.name + " qui a été cliqué")

                         // Retirer le focus des autres boutons
                         for (let btn of btnsFiltres) {
                              if (btn !== clickedBtn) {
                                   btn.classList.add("filter-btn"); 
                                   btn.classList.remove("focus");     
                              } 
                         }
                         
                         // Récupérer les works dans le DOM
                         const works = document.querySelectorAll(".gallery figure");
                         
                         // éviter le rechargement de la page pour que l'affichage ne bouge pas
                         event.preventDefault();
                         
                         // Si bouton cliqué est "Tous"
                         if (clickedBtn.id === "0") {
                              // Pour chaque projet
                              for (let work of works) {
                                   console.log(work);
                                   // Retirer la classe hidden 
                                   work.classList.remove("hidden");
                                   console.log("Le bouton " + clickedBtn.name + " a été cliqué on fait apparaitre tous les projets");
                              }
                         
                         } else {
                              for (let work of works) {
                                   console.log(work.dataset.categoryid);
                                   // Si l'id du work est égal à l'id du bouton cliqué
                                   if (clickedBtn.id === work.dataset.categoryid) {
                                        // retirer la classe hidden au projet
                                        work.classList.remove("hidden");
                                   } else {
                                        // Ajouter la classe hidden au projet
                                        work.classList.add("hidden");
                                   }
                              }
                         }
                    });
               }
          });
     } catch(erreur) {
          alert(erreur.message);
     }
     
}

/**
 * Permet de créer les éléments DOM des filtres 
 */
async function genererBtnsFiltres() {
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
     
     // Récupère les catégories
     const categories = await fetchAPI("categories");

     // Ajouter 1 par 1 les éléments
     listeCategorie.push(...categories);
     console.log(listeCategorie);
     
     // Stocker les catégories dans sessionStorage
     sessionStorage.setItem("categories", JSON.stringify(categories));
     console.log(`Les catégories de l'API sont stockées dans sessionStorage`);
     console.log(`Les catégories stockées dans localSession sont ${sessionStorage.getItem("categories")}`);

     // Créer les boutons dans boucle for
     for (let categorie of listeCategorie) {
          // crée la balise a avec le nom des catégories
          const genereFiltre = document.createElement("a");
          genereFiltre.setAttribute("href", "#");
          genereFiltre.className = "filter-btn";
          
          if (categorie.id === 0) {
               genereFiltre.className = "focus";
          } else {
               genereFiltre.className = "filter-btn";
          }
          
          /*console.log(genereFiltre);*/
          
          // Le texte dans la balise a element.textcontent = "..."
          genereFiltre.textContent = categorie.name;
          genereFiltre.dataset.categorieName = categorie.name;
          genereFiltre.id = categorie.id;

          // Mettre les btn filtres dans le contFiltres
          contFiltres.appendChild(genereFiltre);
     }
     return categories;
}