function solve() {
  const [inputTextArea, resultTextArea] = document.querySelectorAll('#container textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('#container button');
  const tableBodyElement = document.querySelector('.table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
    if (!inputTextArea.value) {
      return;
    }
    const inputArr = JSON.parse(inputTextArea.value);

    for (const el of inputArr) {
      const tableRowElement = createTableRow(el);
      tableBodyElement.append(tableRowElement);
    }

    inputTextArea.value = '';
  }

  function createTableRow(data) {
    const trElement = document.createElement('tr');

    trElement.innerHTML = "<td>" +
                            `<img src=${data.img}>` +
                          "</td>" +
                          "<td>" +
                            `<p>${data.name}</p>` +
                          "</td>" +
                          "<td>" +
                            `<p>${data.price}</p>` +
                          "</td>" +
                          `<td><p>${data.decFactor}</p></td>` +
                          `<td><input type="checkbox"></td>`;
      return trElement;
  }

  function buy(event) {
    let checkbox = Array.from(document.querySelectorAll('input'));
    let items = checkbox.filter(x => x.checked);

    const names = [];
    let totalPrice = 0;
    let sumDecFactor = 0;

    for (let el of items) {
      const trRef = el.parentElement.parentElement;
      const [imgTd, nameTd, priceTd, decFactorTd] = trRef.children;
      const name = nameTd.children[0].textContent;
      let price = Number(priceTd.children[0].textContent);
      let decFactor = Number(decFactorTd.children[0].textContent);

      names.push(name);
      totalPrice += price;
      sumDecFactor += decFactor;
    }

    let result = `Bought furniture: ${names.join(', ')}\n`
    result += `Total price: ${totalPrice.toFixed(2)}\n`
    result += `Average decoration factor: ${sumDecFactor / items.length}`

    resultTextArea.value = result;
  }
}