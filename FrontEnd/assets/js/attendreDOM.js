/**
 * attend que le DOM soit intégralement chargé
 * @returns resolve
 */
export function ready() {
    // Crée une "promesse" qui renvoie resolve(); lorsque le DOM est chargé 
    return new Promise((resolve) => {
        // "Ecoute" le chargement du DOM et renvoie resolve lorsque c'est fait
        document.addEventListener("DOMContentLoaded", resolve);
    });
}