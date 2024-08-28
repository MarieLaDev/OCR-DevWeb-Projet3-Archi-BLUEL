import { attendreDOM } from "./attendreDOM.js";
import { genererGalerie } from "./genererGalerie.js";
import { gererFiltres } from "./gererFiltres.js";
import { gererModale } from "./gererModale.js";


// Appeler la fonction pour générer la galerie quand le DOM est chargé 
attendreDOM(genererGalerie)
     // Lorsque resolve alors appeler la fonction pour générer les filtres 
     .then(() => attendreDOM(gererFiltres))
     // Appeler la fonction gererModale pour identifier si mode édition ou non + affichages des miniatures + supression + ajout
     .then(() => gererModale())