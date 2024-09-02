/**
 * Fonction "d'appel" de l'API selon les besoins ==> l'argument "type" permet de déterminé le dossier API qui sera contacté
 * @param {*} type nom du dossier API à "fetcher"
 * @param {*} options facultatif - Indique le deuxième argument du fetch en cas de POST ou DELETE
 * @returns la réponse du serveur
 */
export async function fetchAPI(type, options = false) {
    try {
        // Constuire l'URL de l'API
        const url = `http://localhost:5678/api/${type}`;
        let reponse;

        // Vérifier s'il y a des options dans la fonction lancée
        if (options) {
            // Lance la requête avec l'objet options
            reponse = await fetch(url, options);
        } else {
            // Sinon faire un GET simple sur l'URL
            reponse = await fetch(url);
        }
        
        console.log(reponse);
        
        // S'il y a un problème créer l'erreur
        if (!reponse.ok) {
            throw new Error(`Erreur dans la requête API : ${reponse.status}`);
        }

        // Gérer les réponses sans contenu, sinon erreur console
        if (reponse.status === 204) { // pour "No Content"
            return {}; // Retourner un objet vide
        }

        // convertit la réponse en objet JavaScript
        const data = await reponse.json();
        
        return data
    } catch (error) {
        console.log(`Erreur : ${error.message}`)
        throw error; // pour pouvoir traiter l'erreur plus loin dans le debugage
    } 
}