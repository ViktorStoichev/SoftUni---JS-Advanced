function solve() {
  const inputText = document.getElementById('input').value;
  const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  let paragraph = '';
  let sentenceCount = 0;

  for (let i = 0; i < sentences.length; i++) {
    if (sentenceCount < 3) {
      paragraph += sentences[i].trim() + '.';
      sentenceCount++;
    }

    if (sentenceCount === 3 || i === sentences.length - 1) {
      const paragraphElement = `<p>${paragraph.trim()}</p>`;
      outputDiv.innerHTML += paragraphElement;
      paragraph = '';
      sentenceCount = 0;
    }
  }
}