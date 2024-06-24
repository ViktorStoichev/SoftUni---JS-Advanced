function extractText() {
    let elements = document.querySelectorAll('li');
    
    let items = Array.from(elements).map(liElement => liElement.textContent);
    
    let textAreaResult = document.getElementById('result');
    textAreaResult.value = items.join('\n')
}