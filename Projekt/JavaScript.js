async function getMessage() {
    const response = await fetch('https://kool.krister.ee/chat/TA23A');
    const message = await response.json();
    console.log(message);
    return message;
}

const chatContainer = document.querySelector('.chat-container');
async function populateMessages () {
    const messages = await getMessage()
    for(const msg of messages) {
        chatContainer.innerHTML = 
            chatContainer.innerHTML + '<p class="message user-a">'+ msg.message + '</p>'
    }
}
populateMessages();

async function sendMessage() {
    const name = document.querySelector('#name').value
    console.log(name);
        chatContainer.innerHTML = 
            chatContainer.innerHTML + '<p class="message user-a">'+ name+ '</p>'
    const message = document.querySelector('#message').value
    console.log(message);
    chatContainer.innerHTML = 
            chatContainer.innerHTML + '<p class="message user-a">'+ message + '</p>'
}

document.querySelector('#send').onclick = sendMessage


