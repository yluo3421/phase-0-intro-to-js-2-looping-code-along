// Code your solutions in this file
// Code your solutions in this file
function writeCards(names, event) {
    let copyNames = [...names];
    let thankMessages = [];
    for (let i = 0; i < copyNames.length; i++) {
        thankMessages[i] = `Thank you, ${copyNames[i]}, for the wonderful surprise gift!`;
    }
    return thankMessages;
}

function countDown(int) {
    let i = 0;
    while (i <= int) {
        console.log(int - i);
        i++
    }
}