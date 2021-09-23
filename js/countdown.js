import { formatError } from "./utils.js";
import "./howler.js";

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - new Date();
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
}

function getZero(num) {
    if ((num >= 0) && (num < 10)) {
        return `0${num}`;
    }
    else {
        return '' + num;
    }
}

const runCountdown = (selector, endtime) => {
    let timeInterval = null;
    const countdownDiv = document.querySelector(selector);

    const startBtn = countdownDiv.querySelector('#countdown-start');
    const stopBtn = countdownDiv.querySelector('#countdown-stop');

    startBtn.addEventListener('click', (ev) => {
        if (null === timeInterval) {
            timeInterval = setInterval(updateClock, 1000);
        }
    });
    stopBtn.addEventListener('click', (ev) => {
        clearInterval(timeInterval);
        timeInterval = null;
    });

    const days = countdownDiv.querySelector('.countdown-days');
    const hours = countdownDiv.querySelector('.countdown-hours');
    const minutes = countdownDiv.querySelector('.countdown-minutes');
    const seconds = countdownDiv.querySelector('.countdown-seconds');

    //updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.textContent = getZero(t.days);
        hours.textContent = getZero(t.hours);
        minutes.textContent = getZero(t.minutes);
        seconds.textContent = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);

            days.textContent = getZero(0);
            hours.textContent = getZero(0);
            minutes.textContent = getZero(0);
            seconds.textContent = getZero(0);

            const countdownEnd = countdownDiv.querySelector('#countdown__result');
            countdownEnd.innerHTML = formatError('Действие акции закончилось');

            //
            let sound = new Howl({
                src: ['audio/alarm01.mp3']
            });
            sound.play();
        }
    }
}

export {
    runCountdown
}