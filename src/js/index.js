let resultat
const carouselContainer = document.querySelector('.carousel-container');

fetch("/data/data.json")
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    resultat = data 
    for (let i = 0; i < resultat["planetes"].length; i++) {
        const card = `
            <article class="carousel-item card" data-planete="${resultat["planetes"][i]["nom"]}";         
            ">
            <div class="planete">
                <img src="${resultat["planetes"][i]["image"]}" alt="">
            </div>
            <div class="titre">${resultat["planetes"][i]["nom"]}</div>
            <div class="information">
                <div class="description">
                    <div class="description-line">
                        <span class="opt">Superficie :</span>
                        <span class="numerals">${resultat["planetes"][i]["superficie"]}</span>
                        <span class="numerals">KM²</span>
                    </div>
                    <div class="description-line">
                        <span class="opt">Distance :</span>
                        <span class="numerals">${resultat["planetes"][i]["distance"]}</span>
                        <span class="numerals-1">KM</span>
                    </div>
                </div>
                <a href="maps.html" class="btn btn-main">En Savoir Plus</a>
            </div>
            <div class="astronaute">
            </div>
            <div class="arrow">
                <img src="/assets/card/arrow-right.svg" alt="">
            </div>
            </article>
        `;


        carouselContainer.insertAdjacentHTML('beforeend', card);
    };
})
