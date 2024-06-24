function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encodeAndSend);
    buttons[1].addEventListener('click', decodeAndRead);

    function encodeAndSend() {
        const textareas = document.querySelectorAll('textarea');
        const senderTextarea = textareas[0];
        const message = senderTextarea.value;
    
        const encodedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    
        senderTextarea.value = '';
    
        const receiverTextarea = textareas[1];
        receiverTextarea.value = encodedMessage;
    }
    
    function decodeAndRead() {
    
        const textareas = document.querySelectorAll('textarea');
        const receiverTextarea = textareas[1];
        const encodedMessage = receiverTextarea.value;
    
        const decodedMessage = encodedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    
        receiverTextarea.value = decodedMessage;
    }
}

