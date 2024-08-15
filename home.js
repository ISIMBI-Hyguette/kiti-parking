
let timerDuration = 3555; 
const timerDisplay = document.getElementById('timer');

function updateTimer() {
    const hours = String(Math.floor(timerDuration / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timerDuration % 3600) / 60)).padStart(2, '0');
    const seconds = String(timerDuration % 60).padStart(2, '0');
    timerDisplay.innerText = `${hours}:${minutes}:${seconds}`;
    
    if (timerDuration > 0) {
        timerDuration--;
    } else {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
