// Fonction GET sur l'API au choix dans l'argument de getDonnees "type"

export async function getAPI(type, options = false) {
    // Cherche les données éléments dans l'API 
    const reponse = await fetch("http://localhost:5678/api/" + type);

    if (false) {

        
    }

    console.log(reponse);

     // convertit la réponse en objet JavaScript
    const data = await reponse.json();
    
     /* Si besoin de stocker dans le localStorage organiser l'objet en json avec : const valeurWorks = JSON.stringify(works); */

     console.log(data);
     return data
 }