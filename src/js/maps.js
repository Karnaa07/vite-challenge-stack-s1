let resultat
const planetes = document.querySelector('.planetes');
console.log(planetes);

fetch("/data/data.json")
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    resultat = data 
    for (let i = 0; i < resultat["planetes"].length; i++) {
        const card = `
            <article class="planete" data-planete="${resultat["planetes"][i]["nom"]}">
                <a href="maps/planete.html?nom=${resultat["planetes"][i]["nom"]}" title="Direction ${resultat["planetes"][i]["nom"]} !">
                    <img src="${resultat["planetes"][i]["image"]}">
                </a>
            </article>
        `;
        planetes.insertAdjacentHTML('beforeend', card);
    };
})
