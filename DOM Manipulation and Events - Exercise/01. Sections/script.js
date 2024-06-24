function create(words) {
   const contentElement = document.getElementById('content');

   for (let word of words) {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.append(pElement);
      
      divElement.addEventListener('click', function () {
         pElement.style.display = '';
      })
      
      contentElement.append(divElement);
   }
}