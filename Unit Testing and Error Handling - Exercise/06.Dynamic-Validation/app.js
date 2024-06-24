function validate() {
    const textElement = document.getElementById('email');
    const pattern = /[a-s]+\@[a-s]+\.[a-s]+/;

    textElement.addEventListener('change', function () {
        if(!pattern.test(textElement.value)) {
            textElement.classList.add('error');
        } else {
            textElement.classList.remove('error');
        }
    })
}