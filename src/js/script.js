const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const output = document.querySelector('.output');
const input = document.querySelectorAll('.input');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const description = document.querySelector('.description')

class User {
    constructor (height, weight) {
        this.height = height;
        this.weight = weight;
    }

    userBmi() {
        let newBmi = this.weight/(Math.pow(this.height, 2));
        return Math.round(newBmi*10)/10

    }
}

const countBMI = () => {

    const visitor = new User(height.value, weight.value)

    if (visitor.height && visitor.weight) {
        
        switch (true) {
            case (visitor.height <= 2.5):

                output.innerHTML = visitor.userBmi()
                break;
            case (height.value > 2.5 && height.value < 80):
                description.innerHTML = "Please provide height in meters or centimeters"
                return
            case (visitor.height >= 80):
                visitor.height = height.value/100;
                output.innerHTML = visitor.userBmi(height, weight)
                break;
            default:
                description.innerHTML = "Please fill height and weight";
                break;  
            }
        } else {
            description.innerHTML = "Please fill height and weight";
            return
        }

    changeBodyBg(visitor.userBmi())
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



