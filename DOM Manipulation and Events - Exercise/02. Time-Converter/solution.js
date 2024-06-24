function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', function () {
        const daysInput = Number(document.getElementById('days').value);

        document.getElementById("hours").value = daysInput * 24;
        document.getElementById("minutes").value = daysInput * 1440;
        document.getElementById("seconds").value = daysInput * 86400;
    });

    document.getElementById('hoursBtn').addEventListener('click', function () {
        const hoursInput = Number(document.getElementById('hours').value);

        document.getElementById("days").value = hoursInput / 24;
        document.getElementById("minutes").value = hoursInput * 60;
        document.getElementById("seconds").value = hoursInput * 3600;
    });

    document.getElementById('minutesBtn').addEventListener('click', function () {
        const minutesInput = Number(document.getElementById('minutes').value);

        document.getElementById("days").value = minutesInput / 1440;
        document.getElementById("hours").value = minutesInput / 60;
        document.getElementById("seconds").value = minutesInput * 60;
    });

    document.getElementById('secondsBtn').addEventListener('click', function () {
        const secondsInput = Number(document.getElementById('seconds').value);

        document.getElementById("days").value = secondsInput / 86400;
        document.getElementById("hours").value = secondsInput / 3600;
        document.getElementById("minutes").value = secondsInput / 60;
    });
}