// Génération des bouton filtres et filtre les résultats


export function genererBtnFiltre() {
     const portfolio = document.getElementById("portfolio");
     // Selection du h2 du portfolio
     const titre = portfolio.querySelector("h2");

     // Crée la div des boutons filtres
     const contFiltres = document.createElement("div");
     contFiltres.className = "btn-zone"

     // Mettre une boucle catégories avec set()
     // crée la balise a avec le nom des catégories
     const filtre = document.createElement("a");
     filtre.className = "filter-btn";
     // Le texte dans la balise a
     filtre.textContent = "Tous";

     // Mettre le filtre dans le contFiltres
     contFiltres.appendChild(filtre);

     // Insérer le conteneur de filtre après le h2
     titre.insertAdjacentElement("afterend", contFiltres);
}