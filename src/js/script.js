const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const output = document.querySelector('.output');
const input = document.querySelectorAll('.input');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const description = document.querySelector('.description')


const countBMI = () => {
    let bmi; 
    let score;
    let meterHeight
    
    if (height.value && weight.value)
    {
    switch (true) {
        case (height.value <= 2.5):
            score = weight.value/(height.value*height.value);
            break;
        case (height.value > 2.5 && height.value < 80):
            description.innerHTML = "Please provide height in meters or centimeters"
            return
        case (height.value >= 80):
            meterHeight = height.value/100;
            score = weight.value/(meterHeight*meterHeight);
            break;

        default:
            break;  
    }
    } else {
        description.innerHTML = "Please fill height and weight";
        return
    }
    bmi = Math.round(score);
    output.innerHTML = bmi;
    changeBodyBg(bmi)
}


const changeBodyBg = (bmi) => {
    
    switch (true) {
        case (bmi < 16):
        body.style.backgroundColor = "#c1121f";
        description.innerHTML = "You are very malnourished. It is strongly recommended to contact your doctor."
        break;
        case (bmi > 16 && bmi < 17):
            body.style.backgroundColor = "#780000";
            description.innerHTML = "You are malnourished. It is suggested to contact your doctor."
        break;
        case (bmi >= 17 && bmi <= 18.5):
            body.style.backgroundColor = "#f7b538";
            description.innerHTML = "You are underweight. It is suggested to think about gaining weight."
        break;
        case (bmi > 18.5 && bmi < 25):
            body.style.backgroundColor = "#7ddf64";
            description.innerHTML = "Congratulations! Your weight is great! Keep on doing this way!"
        break;
        case (bmi >= 25 && bmi < 30):
            body.style.backgroundColor = "#f7b538";
            description.innerHTML = "According to BMI you are overweight. Please consider healthy diet."
        break;
        case (bmi >= 30 && bmi < 35):
            body.style.backgroundColor = "#780000";
            description.innerHTML = "According to BMI you are in first phase of obesity. Please be careful and contact your doctor or dietician."
        break;
        case (bmi >= 35 && bmi < 40):
            body.style.backgroundColor = "#c1121f";
            description.innerHTML = "According to BMI you are in second phase of obesity.  It is strongly suggested to contact your doctor."
        break;
        case (bmi >= 40):
            body.style.backgroundColor = "#d90429";
            description.innerHTML = "Third phase of obesity. This weight is dangerous for your health. Please contact your doctor."
        break;
        default: 
        body.style.backgroundColor = "#fbf5f3";
        description.innerHTML = "Please try again!"

   
    }
}

check.addEventListener('click', countBMI)
check.addEventListener('click', verify)


