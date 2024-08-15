// Fonction GET sur l'API au choix dans l'argument de getDonnees "type"

export async function getDonnees(type) {
    // Cherche les données éléments dans l'API 
    const reponse = await fetch("http://localhost:5678/api/" + type);

    console.log(reponse)

     // convertit la réponse en objet JavaScript
    const data = await reponse.json();
    
     /* Si besoin de stocker dans le localStorage organiser le json en ligne avec : const valeurWorks = JSON.stringify(works); */

     return data

 }

 /*// récupération des data éventuellement stockées dans le localStorage
let works = window.localStorage.getItem("works");

// si localStorage vide alors on fait appel à l'API
if (works === null) {
    const reponse = await fetch("http://localhost:5678/api/works");
    // await pour attendre la réponse du serveur avant de continuer
     
    // tranformer projets(works) en json
    works = await reponse.json();
     
    // Puis les transformer en json en ligne pour le stockage
    const valeurWorks = JSON.stringify(works);

    // Stocke les informations dans le localStorage
     window.localStorage.setItem("works", valeurWorks);
} else {
    // sinon le localStorage n'est pas vide alors on transforme le localStorage en objets JavaScript avec parse (inverse de stringify) 
    works = JSON.parse(works);
} */