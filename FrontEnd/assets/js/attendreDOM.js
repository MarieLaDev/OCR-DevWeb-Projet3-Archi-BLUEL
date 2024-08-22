export function ready(fonction) {
    // Crée une "promesse"  
    return new Promise((resolve) => {
        // "Ecoute" le chargement du DOM
        document.addEventListener("DOMContentLoaded", () => {
          
            // Lorsque c'est fait il lance la fonction en argument de ready
            fonction();
            // Et résout la "promesse"
            resolve();
        });
    });
}