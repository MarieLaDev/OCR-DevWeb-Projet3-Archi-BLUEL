// Fonction GET sur l'API au choix dans l'argument de getDonnees "type"


export async function getAPI(type, options = false) {
    try {
        // Tenter de récupérer les données éléments dans l'API 
        const reponse = await fetch("http://localhost:5678/api/" + type);

        // S'il y a un problème créer l'erreur
        if (!reponse.ok) {
            throw new Error(`de la requête dans la base API : soit l'API " ${type} " n'est pas connu, soit l'API est inaccessible`);
        }

        // convertit la réponse en objet JavaScript
        const data = await reponse.json();

        console.log(data);
        
        return data
    } catch (error) {
        alert(`Erreur : ${error}`)
    } 

}