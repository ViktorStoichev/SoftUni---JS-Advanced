function extract(content) {
    let element = document.getElementById(content);
    let pattern = /\(([^\(\)]+)\)/g;

    let matches = element.textContent.matchAll(pattern);
    let result = Array.from(matches)
        .map(match => match[1])
        .join('; ');

    return result;
}