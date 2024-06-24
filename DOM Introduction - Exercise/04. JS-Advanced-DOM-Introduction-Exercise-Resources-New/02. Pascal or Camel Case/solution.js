function solve() {
  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;

  text = text.toLowerCase();
  let words = text.split(" ");
  let result = "";

  if (type === 'Camel Case') {
    for (let word of words) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      result += word;
    }
    result = result.charAt(0).toLowerCase() + result.slice(1);
  } else if (type === 'Pascal Case') {
    for (let word of words) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      result += word;
    }
  } else {
    result = 'Error!'
  }

  words.join('');

  document.getElementById('result').innerHTML = result;
}