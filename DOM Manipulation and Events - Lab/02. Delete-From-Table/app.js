function deleteByEmail() {
    const allEmails = document.querySelectorAll('#customers tbody tr');
    const inputElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');

    const matched = Array.from(allEmails)
    .find(el => el.getElementsByTagName('td')[1].textContent === inputElement.value);

    if (matched) {
        matched.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}