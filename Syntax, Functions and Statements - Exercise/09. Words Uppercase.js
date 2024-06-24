function wordsUppercase(text) {
    let words = text.match(/\b\w+\b/g);
    let converted = words.map(word => word.toUpperCase());
    console.log(converted.join(', '));
}