function toggle() {
    let option = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if (text.style.display === 'none') {
        text.style.display = 'block';
        option.textContent = 'Less';
    } else {
        text.style.display = 'none';
        option.textContent = 'More';
    }
}