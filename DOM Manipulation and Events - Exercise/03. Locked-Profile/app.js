function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    for (let profile of profiles) {
        const showBtn = profile.querySelector('button');
        const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
        const lockRadio = profile.querySelector("input[value='lock']");
        const unlockRadio = profile.querySelector("input[value='unlock']");

        showBtn.addEventListener('click', function() {
            if (unlockRadio.checked) {
                if (showBtn.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    showBtn.textContent = 'Hide it';
                } else if (showBtn.textContent === 'Hide it') {
                    hiddenFields.style.display = 'none';
                    showBtn.textContent = 'Show more';
                }
            }

            if (lockRadio.checked && hiddenFields.style.display === 'block') {
                showBtn.removeEventListener();
            } 
        });
    }
}