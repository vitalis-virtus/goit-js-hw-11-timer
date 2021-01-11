const CountdownTimer = function (selector, date) {
    this.selector = selector;
    this.targetDate = new Date(date);

    const time = () => {
        const deltaTime = this.targetDate - new Date();
        return deltaTime < 0 ? 0 : deltaTime;
    };

    this.timerDaysRef = document.querySelector(`${this.selector} span[data-value="days"]`);
    this.timerHoursRef = document.querySelector(`${this.selector} span[data-value="hours"]`);
    this.timerMinsRef = document.querySelector(`${this.selector} span[data-value="mins"]`);
    this.timerSecsRef = document.querySelector(`${this.selector} span[data-value="secs"]`);

    setInterval(() => {
        this.timerDaysRef.textContent = Math.floor(time() / (1000 * 60 * 60 * 24));
        this.timerHoursRef.textContent = Math.floor((time() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.timerMinsRef.textContent = Math.floor((time() % (1000 * 60 * 60)) / (1000 * 60));
        this.timerSecsRef.textContent = Math.floor((time() % (1000 * 60)) / 1000);
    }, 1000);


}

const timer = new CountdownTimer('#timer-1', '02 11, 2021,');