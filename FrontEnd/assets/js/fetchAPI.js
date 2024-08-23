// Fonction GET sur l'API au choix dans l'argument de getDonnees "type"


export async function fetchAPI(type, options = false) {
    try {
        // Constuire l'URL de l'API
        const url = `http://localhost:5678/api/${type}`;
        let reponse = "";

        // Vérifier s'il y a des options
        if (options) { // Vérifie si option existe
            // Envoyer la requête dans l'API avec les options 
            reponse = await fetch(url, options);
        } else {
            // Sinon faire un GET simple sur l'URL
            reponse = await fetch(url);
        }

        // S'il y a un problème créer l'erreur
        if (!reponse.ok) {
            throw new Error(`de la requête à la base API : " ${type} "`);
        }

        // convertit la réponse en objet JavaScript
        const data = await reponse.json();

        console.log(data);
        
        return data
    } catch (error) {
        alert(`Erreur : ${error}`)
    } 

}