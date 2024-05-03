async function getMessage() {
    const response = await fetch('https://kool.krister.ee/chat/TA23A');
    const message = await response.json();
    return message.slice(message.length - 15);
}

const chatContainer = document.querySelector('.chat-container');
async function populateMessages (message) {
    chatContainer.innerHTML = '';
    const messages = await getMessage();
    for(const msg of messages) {
        chatContainer.innerHTML = chatContainer.innerHTML + 
            '<p class="user-a">'+ msg.name.slice(0,10).replace(/[\W]/g, "-")  + ": " + msg.message.slice(0, 40) + '</p>';
    }
    window.scrollTo(0, document.body.scrollHeight);
}

populateMessages()
setInterval(populateMessages, 2000)

async function populateMembers(messages) {
    const names = messages.map((message) => message.name); 
    const uniqueNames = [...new Set(names)];
    const membersContainer = document.querySelector(".menu-container");
    membersContainer.innerHTML = "";
    for (const name of uniqueNames) {
        membersContainer.innerHTML +=`<p>€${name}</p>`;
    } 
}

async function sendMessage() {
    const name = document.querySelector('#name').value
    const message = document.querySelector('#message').value
    const body = {name: name, message: message}
    await fetch('https://kool.krister.ee/chat/TA23A', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })

}

document.querySelector('#send').onclick = sendMessage;

