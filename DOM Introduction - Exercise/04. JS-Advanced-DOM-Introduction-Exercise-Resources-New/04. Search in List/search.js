function search() {
   let towns = document.querySelectorAll('ul li');
   let search = document.getElementById('searchText').value;
   let matches = 0;

   for (let town of towns) {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
   document.getElementById('searchText').value = "";
}
