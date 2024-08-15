// Countdown timer logic
const countdown = {
    days: 2,
    hours: 5,
    minutes: 30,
    seconds: 45
};

function updateTimer() {
    const totalSeconds = countdown.days * 86400 + countdown.hours * 3600 + countdown.minutes * 60 + countdown.seconds;

    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        return;
    }

    countdown.seconds--;

    if (countdown.seconds < 0) {
        countdown.seconds = 59;
        countdown.minutes--;

        if (countdown.minutes < 0) {
            countdown.minutes = 59;
            countdown.hours--;

            if (countdown.hours < 0) {
                countdown.hours = 23;
                countdown.days--;
            }
        }
    }

    document.getElementById('days').querySelector('.circle').style.setProperty('--value', (countdown.days / 2) * 100);
    document.getElementById('hours').querySelector('.circle').style.setProperty('--value', (countdown.hours / 24) * 100);
    document.getElementById('mins').querySelector('.circle').style.setProperty('--value', (countdown.minutes / 60) * 100);
    document.getElementById('secs').querySelector('.circle').style.setProperty('--value', (countdown.seconds / 60) * 100);
}

const timerInterval = setInterval(updateTimer, 1000);
