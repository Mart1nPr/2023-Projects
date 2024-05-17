async function Generate() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const test = await response.json();
    const factcheck = document.querySelector(".factbox");
    factcheck.innerHTML = `<p>${test.text}</p>`;
}

document.querySelector('#generate').onclick = Generate;