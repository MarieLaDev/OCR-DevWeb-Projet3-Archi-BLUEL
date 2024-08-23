export function gererModifs() {
     // Récupérer le token dans local storage
     let token = sessionStorage.getItem("token hidden");
     // JSON.parse() pour transformer un session ou local storage en objet JavaScript
     token = JSON.parse(token);
     console.log(`Le Token est : ${token}`);
     if (token !== null) {
          divToken = document.querySelector("token");
          console.log(divToken);
          divToken.classList.remove("hidden");
     }
}
