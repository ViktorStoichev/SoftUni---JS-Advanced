function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    const deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', function() {
        liElement.remove();
    })

    liElement.append(deleteElement);

    ulElement.append(liElement);
    
    inputElement.focus();
    
    inputElement.value = "";
}