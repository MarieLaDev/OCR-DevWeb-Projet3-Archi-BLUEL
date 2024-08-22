import { ready } from "./attendreDOM.js";
import { genererGalerie } from "./genererGalerie.js";
import { gererFiltres } from "./gererFiltres.js";


// Appeler la fonction pour générer la galerie quand le DOM est chargé et seulement après...
ready(genererGalerie).then(() => {

     // Appeler la fonction pour générer les filtres après la génération de la galerie
     gererFiltres();
});