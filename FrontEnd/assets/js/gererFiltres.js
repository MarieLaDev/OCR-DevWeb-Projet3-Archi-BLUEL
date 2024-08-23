/**
 * Gère les boutons filtres de la page index.html la variable 
 * btnsFiltres permettra de récupérer les catégories pour l'ajout de projets
 * Dans le main, attendra que les fonction ready et genererGalerie soient
 * terminées
 * appelle la fonction genererFiltres() - en bas du code
 */
export async function gererFiltres() {
     return new Promise(async (resolve) => { 
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
               resolve();
          } catch(erreur) {
               alert(erreur.message);
          }
     });
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

     const listeProjets = document.querySelectorAll(".gallery figure");
     console.log(listeProjets);
     
     let categoriesGalerie = [];
     let ajoutCategorie = new Set();

     for (let projet of listeProjets) {
          let objetCategorie = {id: projet.dataset.categoryid, name: projet.dataset.categoryname};
          // Transformer l'objet en JSON.stringify pour garantir l'unicité dans le set
          let newCateg = JSON.stringify(objetCategorie);

          // Vérifier que l'élément est nouveau pour le set (ajoutCategorie n'a pas newCateg dans sa liste)
          if (!ajoutCategorie.has(newCateg)) {
               // créer l'ajout dans le set pour la prochaine boucle
               ajoutCategorie.add(newCateg);
               // ajouter l'objet dans categorieGalerie
               categoriesGalerie.push(objetCategorie);
          }
     }

     console.log(categoriesGalerie);
     
     // Création d'un objet listeCategories avec "Tous"
     let listeCategories = [{"id" : 0, "name" : "Tous"},];
     
     
     // Ajouter 1 par 1 les éléments
     listeCategories.push(...categoriesGalerie);
     console.log(listeCategories);

     // Créer les boutons dans boucle for
     for (let categorie of listeCategories) {
          // Crée la balise a avec le nom des catégories
          const genereFiltre = document.createElement("a");
          genereFiltre.setAttribute("href", "#");
          genereFiltre.className = "filter-btn";
          
          if (categorie.id === 0) {
               genereFiltre.className = "focus";
          } else {
               genereFiltre.className = "filter-btn";
          }
          
          // Le texte dans la balise a element.textcontent = "..."
          genereFiltre.textContent = categorie.name;
          genereFiltre.dataset.categorieName = categorie.name;
          genereFiltre.id = categorie.id;

          // Mettre les btn filtres dans le contFiltres
          contFiltres.appendChild(genereFiltre);
     }
}