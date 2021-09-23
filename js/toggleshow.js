const toggleBtn = document.querySelector('#toggle-btn');

const toggleShow = (dateBlock, countdownBlock) => {
    let showCountdown = false;

    toggleBtn.addEventListener('click', (ev) => {
        ev.preventDefault()

        if (true === showCountdown) {
            countdownBlock.style.display = 'none';
            dateBlock.style.display = 'block';
            ev.target.textContent = 'Таймер';
        }
        else {
            countdownBlock.style.display = 'block';
            dateBlock.style.display = 'none';
            ev.target.textContent = 'Калькулятор дат';
        }

        showCountdown = !showCountdown;
    });
}

//*******************************************************************

export {
    toggleShow
}