const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const output = document.querySelector('.output');
const check = document.querySelector('.check')


const countBMI = () => {
    let bmi; 
    let score;
    let meterHeight

    if (height.value < 50) {
    score = weight.value/(height.value*height.value);
    } else if (height.value > 100) {
        meterHeight = height.value/100;
        score = weight.value/(meterHeight*meterHeight);
    }

    bmi = Math.round(score);
    output.innerHTML = bmi;
}

check.addEventListener('click', countBMI)

