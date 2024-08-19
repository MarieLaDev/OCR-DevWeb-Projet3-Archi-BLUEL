export function gererClicsFiltres() {
     // Récupérer les éléments boutons
     let btnsFiltres = document.querySelectorAll(".btn-zone a");
     console.log("La valeur de \"btnFiltre\" est une NodeList : ")
     console.log(btnsFiltres);
     
     // Pour parcourir les éléments d'une NodeList .forEach     
     btnsFiltres.forEach(filtre => {
          // Pour chaque btn de la NodeList "écouter" le clic
          filtre.addEventListener("click", (event) => {
               // récupérer le bouton cliqué
               const clickedBtn = event.target;
               console.log(clickedBtn);
               console.log("Le bouton cliqué est : " + clickedBtn.name + " et son ID est " + clickedBtn.id);
               
               clickedBtn.classList.add("focus"); 
               clickedBtn.classList.remove("filter-btn");
               
               // Retirer le focus des autres boutons
               btnsFiltres.forEach(btn => {
                    if (btn !== clickedBtn) {
                         console.log("On change les class sur le bouton " + btn.name + " qui n'a pas été cliqué")
                         btn.classList.add("filter-btn"); 
                         btn.classList.remove("focus");     
                    } 
               });
               
               // Récupérer les works dans le DOM
               const works = document.querySelectorAll(".gallery figure");
               
               // éviter le rechargement de la page pour que l'affichage ne bouge pas
               event.preventDefault();
               
               // Si bouton cliqué est "Tous"
               if (clickedBtn.id === "0") {
                    // Pour chaque projet
                    works.forEach (work => {
                         // Retirer la classe hidden 
                         work.classList.remove("hidden");
                         console.log("Le bouton " + clickedBtn.name + " a été cliqué on fait apparaitre tous les  projets")
                    });
               
               } else {
                    works.forEach (work => {
                         // Si l'id du work est égal à l'id du bouton cliqué
                         if (clickedBtn.id === work.getAttribute("categoryId")) {
                              // retirer la classe hidden au projet
                              work.classList.remove("hidden");
                              console.log("On affiche le projet " + work.innerText + " qui correspondent à " + clickedBtn.name + " avec categoryId " + work.getAttribute("categoryId"));
                         } else {
                              // Ajouter la classe hidden au projet
                              work.classList.add("hidden");
                              console.log("On cache le projet " + work.innerText + " qui ne correspond pas à " + clickedBtn.name + " avec sa categoryId " + work.getAttribute("categoryId"));
                         }
                    });
               }
          });
     });  
}