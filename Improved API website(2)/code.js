async function Generate() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const test = await response.json();
    const factcheck = document.querySelector(".factbox");
    factcheck.innerHTML = `<p>${test.text}</p>`;
}


async function GenerateCat() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random?amount=1")
    const cat = await response.json();
    const catfact = document.querySelector(".factbox")
    catfact.innerHTML = `<p>${cat.text}</p>`;

}


document.querySelector('#generate').onclick = Generate;
document.querySelector("#CatGenerator").onclick = GenerateCat;