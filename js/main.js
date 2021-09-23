import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
//
import { toggleShow } from "./toggleshow.js";
import { runCountdown } from "./countdown.js";

// Калькулятор дат

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    event.preventDefault();

    dateCalcResult.innerHTML = "";

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    }
}

// Таймер обратного отсчета

const countdownDiv = document.querySelector('#countdown');
countdownDiv.style.display = 'none';

toggleShow(dateCalcForm, countdownDiv);

const deadline = '2021-10-31';

runCountdown('#countdown', deadline);