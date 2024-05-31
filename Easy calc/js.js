document.querySelector("#Addition").onclick = Addition;
document.querySelector("#subtract").onclick = Subtract;
document.querySelector("#Multiply").onclick = Multiply;
document.querySelector("#Divide").onclick = Divide;

async function Addition() {
    FirstNumber = document.querySelector("#FirstNumber").value;
    SecondNumber = document.querySelector("#SecondNumber").value;
    Answer = Number(FirstNumber) + Number(SecondNumber);
    output = document.querySelector(".output")
    output.innerHTML = `<p>${"Answer: "+Answer}</p>`;
}

async function Subtract() {
    FirstNumber = document.querySelector("#FirstNumber").value;
    SecondNumber = document.querySelector("#SecondNumber").value;
    Answer = Number(FirstNumber) - Number(SecondNumber);
    output = document.querySelector(".output")
    output.innerHTML = `<p>${"Answer: "+Answer}</p>`;
}

async function Multiply() {
    FirstNumber = document.querySelector("#FirstNumber").value;
    SecondNumber = document.querySelector("#SecondNumber").value;
    Answer = Number(FirstNumber) * Number(SecondNumber);
    output = document.querySelector(".output")
    output.innerHTML = `<p>${"Answer: "+Answer}</p>`;
}

async function Divide() {
    FirstNumber = document.querySelector("#FirstNumber").value;
    SecondNumber = document.querySelector("#SecondNumber").value;
    Answer = Number(FirstNumber) / Number(SecondNumber);
    output = document.querySelector(".output")
    output.innerHTML = `<p>${"Answer: "+Answer}</p>`;
}
