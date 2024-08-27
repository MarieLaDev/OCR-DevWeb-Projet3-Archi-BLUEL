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
        let reponse = "";

        // Vérifier s'il y a des options
        if (options) { // Vérifie si option existe
            // Envoyer la requête dans l'API avec les options 
            reponse = await fetch(url, options);
            console.log(reponse);
        } else {
            // Sinon faire un GET simple sur l'URL
            reponse = await fetch(url);
            console.log(reponse);
        }

        // S'il y a un problème créer l'erreur
        if (!reponse.ok) {
            throw new Error(`Erreur dans la requête API : ${reponse.status} ${reponse.statusText}`);
        }

        // convertit la réponse en objet JavaScript
        const data = await reponse.json();

        console.log(data);
        
        return data
    } catch (error) {
        console.log(`Erreur : ${error.message}`)
        throw error; // pour pouvoir traiter l'erreur plus loin dans le debugage
    } 
}