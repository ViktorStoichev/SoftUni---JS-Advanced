function focused() {
    const sections = document.querySelectorAll('input');
    
    sections.forEach(s => {
        s.addEventListener('focus', function() {
            s.parentElement.classList.add('focused');
        });
        
        s.addEventListener('blur', function() {
            s.parentElement.classList.remove('focused');
        });
    });
}