function solve() {
   const buttonElements = document.querySelectorAll('.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkOutButton = document.querySelector('.checkout');

   let list = {};

   checkOutButton.addEventListener('click', function (event) {
      const totalPrice = Object.values(list).reduce(
         (sum, currPrice) => (sum += currPrice));
      const productsBought = Object.keys(list).join(', ');
      textAreaElement.value += `You bought ${productsBought} for ${totalPrice.toFixed(2)}.`;

      buttonElements.forEach(button => button.setAttribute('disabled', 'disabled'));
      checkOutButton.setAttribute('disabled', 'disabled');
   });

   buttonElements.forEach((button) => {
      const productElement = button.parentElement.parentElement;
      button.addEventListener('click', function () {
         const name = productElement.querySelector('.product-title').textContent;
         const price = Number(
            productElement.querySelector('.product-line-price').textContent);
         textAreaElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

         if (!list[name]) {
            list[name] = 0;
         }

         list[name] += price;
      });
   });
}
