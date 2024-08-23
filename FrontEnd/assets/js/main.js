import { ready } from "./attendreDOM.js";
import { genererGalerie } from "./genererGalerie.js";
import { gererFiltres } from "./gererFiltres.js";
import { gererModifs } from "./gererModifs.js";


// Appeler la fonction pour générer la galerie quand le DOM est chargé et seulement après...
ready().then(() => {
     // Attendre que la gallerie soit générée et retourne resolve()
     return genererGalerie();
}).then(() => {
     // Appeler la fonction pour générer les filtres 
     gererFiltres();
}).then(() => {     
     // Appeler la fonction gererModifs pour identifier si mode édition ou non
     gererModifs();
});