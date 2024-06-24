function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let search = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {

      let searchText = search.value
      search.value = "";
      
      for (let row of rows) {
         let rowData = row.querySelectorAll('td');
         for (let data of rowData) {
            if (data.textContent.includes(searchText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
   }
}