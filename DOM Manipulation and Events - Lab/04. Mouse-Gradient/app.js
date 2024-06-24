function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', function(event) {
        const currentPlace = event.offsetX;
        const elWidth = gradientElement.clientWidth;
        const percentage = Math.trunc((currentPlace / (elWidth - 1)) * 100);

        resultElement.textContent = percentage + '%';
    });

    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientOut(event) {
        resultElement.textContent = "";
    }
}