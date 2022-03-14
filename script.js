//Setting Up Const
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');

const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliSeconds = document.querySelector('.milliSeconds');
const laps = document.querySelector('.lap-list');
const clear = document.querySelector('.clear');
const stopwatch = document.querySelector('.stopwatch');





//Setting up param
let secCounter = 0; let sec;

let centiCounter = 0; let centi;

let minCounter = 0; let min;
let isStart = false;
let i = 1;


const play = () => {
    stopwatch.style.display = 'none';  //Hidding Press Start view when starBtn is clicked

    if (!isStart) {
        startBtn.innerHTML = 'STOP';
        min = setInterval(() => {
            if (minCounter < 10) {       
                minutes.innerText = `0${++minCounter} : `;
            } else {
                minutes.innerText = `${++minCounter} : `;
            }
            if (minCounter === 60) {
                minCounter = 0;
            }

        }, 60000);
        sec = setInterval(() => {
            if (secCounter < 10) {
                seconds.innerText = `0${++secCounter} : `;
            } else {
                seconds.innerText = `${++secCounter} : `;
            }
            if (secCounter === 60) {
                secCounter = 0;
            }
        }, 1000);
        centi = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            milliSeconds.innerText = ` ${++centiCounter} `;
        }, 1);
        isStart = true;
    } else {
        startBtn.innerHTML = 'START'
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centi);

        isStart = false;
    }


}

startBtn.addEventListener('click', play);       //EventListener For Start Button

const reset = () => {
    secCounter = 0;
    centiCounter = 0;
    minCounter = 0;

    isStart = true;
    play();

    minutes.innerHTML = "0 :";
    seconds.innerHTML = "0 :";
    milliSeconds.innerHTML = "0";
}

resetBtn.addEventListener('click', reset);  //Setting Up Reset Btn & calling Function to work



//Ranking & setting Up Laps when clicked

const rank = document.querySelector('.ranking');

const recordlap = () => {
    if (centiCounter !== 0 || secCounter !== 0 || minCounter !== 0) {
        const li = document.createElement("li");


        li.innerText = ` #${i}    ${minCounter} : ${secCounter} : ${centiCounter}`; i++;
        document.querySelector(".time-laps").append(li);
    }


}

lapBtn.addEventListener('click', recordlap);



clear.addEventListener('click', clearAll);

const clearAll = () => {
    centiCounter == `${centiCounter}`;
    secCounter == `${secCounter}`;
    minCounter == `${minCounter}`;
}