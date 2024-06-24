function random() {
  let list = {
    fsf: 123,
    hdh: 2154,
    gdhf: 7575,
    jjk: 7654,
  };

  let totalPrice = Object.values(list).reduce(
    (sum, currPrice) => (sum += currPrice)
  );
  let productsBought = Object.keys(list).join(', ')

  console.log(totalPrice, productsBought);
}

random();
