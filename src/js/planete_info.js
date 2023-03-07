let resultat
const planeteGrid = document.querySelector(".planete_info_grid");
const currentUrl = new URL(window.location.href);
const pageName = currentUrl.searchParams.get('nom');

fetch("/data/data.json")
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    resultat = data 
    
  // Récupérer la valeur du paramètre "nom" de l'URL
  const urlSearchParams = new URLSearchParams(window.location.search);
  const nomPlanete = urlSearchParams.get('nom');
  
  // Rechercher l'objet correspondant à la planète avec le nom donné
  const planete = data.planetes.find(p => p.nom === nomPlanete);
  // Récupérer le nom de la planète
  const nom = planete.nom;
  // Afficher le nom de la planète dans la console
  if(nomPlanete == nom){
    console.log("ok");
    console.log(planete.nom)
    const dataPlanete = `
        <div class="cta">
            <figure>
                <img src="${planete.image}" alt="" class="logo-planete" title="planete : ${planete.nom}">
                <figcaption>
                    <a href="/maps.html">
                        <img src="/assets/card/arrow-right.svg" alt="" class="arrow-left">
                        <span>Retour</span>
                    </a>
                </figcaption>
            </figure>
        </div>
        <div class="planete_infos">
            <h1 class="title">${planete.nom}</h1>
            <div class="container-infos-logo">
                <div class="description">
                    <figure>
                        <img src="/assets/icons-info-planete/feu.svg" alt="">
                        <figcaption>
                            <span>${planete.caracteristiques[0].caracteristique_1}</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="description">
                    <figure>
                        <img src="/assets/icons-info-planete/planete.svg" alt="">
                        <figcaption>
                            <span>${planete.caracteristiques[0].caracteristique_2}</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="description">
                    <figure>
                        <img src="/assets/icons-info-planete/eau.svg" alt="">
                        <figcaption>
                            <span>${planete.caracteristiques[0].caracteristique_3}</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="description">
                    <figure>
                        <img src="/assets/icons-info-planete/air.svg" alt="">
                        <figcaption>
                            <span>${planete.caracteristiques[0].caracteristique_4}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="container-infos-description">
                <div class="description">
                    <p>
                        ${planete.caracteristiques[0].caracteristique_1_description}
                    </p>
                </div>
                <div class="description">
                    <p>
                        ${planete.caracteristiques[0].caracteristique_2_description}
                    </p>
                </div>
                <div class="description">
                    <p>
                        ${planete.caracteristiques[0].caracteristique_3_description}
                    </p>
                </div>
                <div class="description">
                    <p>
                        ${planete.caracteristiques[0].caracteristique_4_description}
                    </p>
                </div>
            </div>
        </div>
    `;
    planeteGrid.insertAdjacentHTML('beforeend', dataPlanete);

  }
})