import { ready } from "./attendreDOM.js";
import { genererGalerie } from "./genererGalerie.js";
import { gererFiltres } from "./gererFiltres.js";
import { gererConnexion } from "./gererConnexion.js";


// Appeler la fonction pour générer la galerie quand le DOM est chargé
ready(genererGalerie);

// Appeler la fonction pour générer les filtres quand le DOM est chargé
ready(gererFiltres);

// Appeler la fonction de gestion de la connexion quand le DOM est chargé
ready(gererConnexion);