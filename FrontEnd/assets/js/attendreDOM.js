/**
 *  * attend que le DOM soit intégralement chargé puis que la fonction en argument soit executée
 * @param {*} fonction 
 * @returns {Promise} 
 */
export function attendreDOM(fonction) {
    // Permettre d'attendre que la fonction en argument soit terminée
    return new Promise((resolve) => {
        // Regarde si le DOM est prêt (chargé) 
        if (document.readyState !== 'loading') {
            // Si le DOM est déjà chargé, exécuter la fonction en argument
            fonction().then(resolve).catch(resolve);
        } else {
            // Sinon, attendre que le DOM soit complètement chargé puis lancer la fonction
            document.addEventListener('DOMContentLoaded', () => {
                fonction().then(resolve).catch(resolve);
            });
        }
    });
}