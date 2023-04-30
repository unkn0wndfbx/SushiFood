var popupActif = null;

// fonction : afficher popup
function afficherPopup(titre, description, prix, image) {
    // condition : popup est actif
    if (popupActif !== null) {
        document.body.removeChild(popupActif);
        document.body.removeChild(popupActif.overlay);
        popupActif = null;
        document.body.style.overflowY = "auto";
    }

    // ajout contenu popup
    var popup = document.createElement("div");
    popup.className = "popup_menu";
    popup.innerHTML = "<h1>" + titre + "</h1><h2>" + description + "</h2><p>" + prix + "</p><i class='fa-solid fa-xmark close_popup'></i><img src='" + image + "'><p>";
    document.body.appendChild(popup);

    // ajout element pour recouvrir page et empecher interaction avec les autres éléments
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    // definir popup = actif
    popupActif = {
        popup: popup,
        overlay: overlay
    };

    // fonction : icone fermer cliquee
    var closeBtn = document.querySelector(".close_popup");
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
        popupActif = null;
        document.body.style.overflowY = "auto";
    });

    // Empêcher le défilement de la page
    document.body.style.overflow = "hidden";
}

// fonction : plats cliques
var elements = document.querySelectorAll(".menu_titre");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
        e.preventDefault();
        var titre = this.closest(".menu_liste").querySelector(".menu_titre").textContent;
        var description = this.closest(".menu_liste").querySelector(".menu_description").textContent;
        var prix = this.closest(".menu_liste").querySelector(".menu_prix").textContent;
        var image = this.closest(".menu_liste").querySelector(".menu_image").src;
        //condition : popup pas actif
        if (popupActif == null) {
            afficherPopup(titre, description, prix, image);
        }
    });
}

// menu hamburger
const header = document.querySelector("header#header");
const menuHamburger = document.querySelector(".menu_hamburger");
const liens = header.querySelectorAll('a');
// fonction : icone menu hamburger cliquee
menuHamburger.addEventListener('click', () => {
    header.classList.toggle('menu_hamburger_active');

    // condition : menu hamburger active
    if(header.classList.contains('menu_hamburger_active')) {
        menuHamburger.style.color = "var(--color-secondaire)";
        document.body.style.overflow = "hidden";
    }
    else {
        menuHamburger.style.color = "var(--color-principale)";
        document.body.style.overflowY = "auto";
    }
})

// fonction : liens menu hamburger cliquees
liens.forEach(liens => {
    liens.addEventListener('click', () => {
      if (header.classList.contains('menu_hamburger_active')) {
        header.classList.remove('menu_hamburger_active');
        menuHamburger.style.color = "var(--color-principale)";
        document.body.style.overflowY = "auto";
      }
    })
})