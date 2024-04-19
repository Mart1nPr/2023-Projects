async function getMessages() {
    const response = await fetch('https://kool.krister.ee/chat/TA23A')
    const messages = await response.json()

    for (const message of messages) {
        const p = document.createElement('p')
        p.innerText = message.msg
        p.innertext += message.name
        document.body.appendChild(p)
        window.scrollTo(0, 9999)
 }
}

getMessages()

var input = document.getElementById('myInput');
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('myBtn').click();
    }
});

fetch("https://kool.krister.ee/chat/TA23A", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    name: 'Martin',
    msg: 'Hello world!'
  })
})
.then( (response) => { 
});