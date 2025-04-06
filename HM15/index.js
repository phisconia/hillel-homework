function startCountdown(duration) {
    let timer = duration;
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    
    function updateTimer() {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;
        
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
        
        if (timer > 0) {
            timer--;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

startCountdown(59 * 60 * 60 + 59 * 60 + 59);