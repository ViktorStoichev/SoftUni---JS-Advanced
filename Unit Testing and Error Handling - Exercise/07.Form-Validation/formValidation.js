function validate() {
    const form = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyInfoFieldset = document.getElementById('companyInfo');
    const companyNumberInput = document.getElementById('companyNumber');
    const validDiv = document.getElementById('valid');

    companyCheckbox.addEventListener('change', function() {
        if (companyCheckbox.checked) {
            companyInfoFieldset.style.display = 'block';
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        const username = usernameInput.value;
        if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
            usernameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            usernameInput.style.border = 'none';
        }

        const email = emailInput.value;
        if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.border = 'none';
        }

        const password = passwordInput.value;
        if (!/^\w{5,15}$/.test(password)) {
            passwordInput.style.borderColor = 'red';
            isValid = false;
        } else {
            passwordInput.style.border = 'none';
        }

        const confirmPassword = confirmPasswordInput.value;
        if (password !== confirmPassword || !/^\w{5,15}$/.test(confirmPassword)) {
            confirmPasswordInput.style.borderColor = 'red';
            isValid = false;
        } else {
            confirmPasswordInput.style.border = 'none';
        }

        if (companyCheckbox.checked) {
            const companyNumber = Number(companyNumberInput.value);
            if (!Number.isInteger(companyNumber) || companyNumber < 1000 || companyNumber > 9999) {
                companyNumberInput.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumberInput.style.border = 'none';
            }
        }

        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
}
