
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const weightPl = document.querySelector('.weight-pl');
const heightPl = document.querySelector('.height-pl');
const output = document.querySelectorAll('.output');
const check = document.querySelectorAll('.check');
const body = document.querySelector('body');
const description = document.querySelector('.description');
const descriptionPL = document.querySelector('.description-pl');
const title = document.querySelectorAll('.title');
const mainTitle = document.querySelector('.main-title-pl');
const lang = document.querySelector('.lang');
const en = document.querySelectorAll('.en');
const pl = document.querySelectorAll('.pl');
const task = document.querySelector('#task');
const submit = document.querySelector('#submit');
const taskList = document.querySelector('#task-list');
const tasks = document.querySelector('#tasks');
const form = document.querySelector('form');

const changeLang = () => {
    en.forEach(item => {
        item.classList.toggle('hide')
    }) 
    pl.forEach(item => {
        item.classList.toggle('show')
    }) 
}

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

    let visitor;
   
    !mainTitle.classList.contains('show') ?
        visitor = new User(height.value, weight.value)  
        : 
        visitor = new User(heightPl.value, weightPl.value);

    if (visitor.height && visitor.weight) {

        switch (true) {
            case (visitor.height <= 2.5):
                output.forEach(output => {
                    output.innerHTML = visitor.userBmi()
                })
                break;
            case (height.value > 2.5 && height.value < 80):
               
                description.innerHTML = answers.wrong_format.eng;
                descriptionPL.innerHTML = answers.wrong_format.pl;
                output.forEach(output => {
                    output.innerHTML = answers.clear_input.clear
                })
                
                return
            case (visitor.height >= 80):
                visitor.height = visitor.height/100;
                output.forEach(output => {
                    output.innerHTML = visitor.userBmi()
                })
                break;
            default:
                description.innerHTML = answers.missing_input.eng
                descriptionPL.innerHTML =  answers.missing_input.pl
                break;  
            }
        } else {
            description.innerHTML = answers.missing_input.eng
            descriptionPL.innerHTML =  answers.missing_input.pl
            return
        }

    feedback(visitor.userBmi())
}


const feedback = (bmi) => {
    
    switch (true) {
        case (bmi < 16):
            body.style.backgroundColor = "#c1121f";
            title.forEach(item =>{
                item.style.borderColor = "#c1121f"
            });
            description.innerHTML = answers.extremelyLowBMI.eng
            descriptionPL.innerHTML = answers.extremelyLowBMI.pl
            break;
        case (bmi >= 16 && bmi < 17):
            body.style.backgroundColor = "#780000";
            title.forEach(item =>{
                item.style.borderColor = "#780000"
            });
            description.innerHTML = answers.veryLowBMI.eng
            descriptionPL.innerHTML = answers.veryLowBMI.pl
        break;
        case (bmi >= 17 && bmi <= 18.5):
            body.style.backgroundColor = "#f7b538";
            title.forEach(item =>{
                item.style.borderColor = "#f7b538"
            });
            description.innerHTML = answers.lowBMI.eng
            descriptionPL.innerHTML = answers.lowBMI.pl
        break;
        case (bmi > 18.5 && bmi < 25):
            body.style.backgroundColor = "#7ddf64";
            title.forEach(item =>{
                item.style.borderColor = "#7ddf64"
            });
            description.innerHTML = answers.norm.eng
            descriptionPL.innerHTML = answers.norm.pl
        break;
        case (bmi >= 25 && bmi < 30):
            body.style.backgroundColor = "#f7b538";
            title.forEach(item =>{
                item.style.borderColor = "#f7b538"
            });
            description.innerHTML = answers.overweight.eng
            description.innerHTML = answers.overweight.pl
        break;
        case (bmi >= 30 && bmi < 35):
            body.style.backgroundColor = "#780000";
            title.forEach(item =>{
                item.style.borderColor = "#780000"
            });
            description.innerHTML = answers.obesity_first.eng
            descriptionPL.innerHTML = answers.obesity_first.pl
        break;
        case (bmi >= 35 && bmi < 40):
            body.style.backgroundColor = "#c1121f";
            title.forEach(item =>{
                item.style.borderColor = "#c1121f"
            });
            description.innerHTML = answers.obesity_second.eng
            descriptionPL.innerHTML = answers.obesity_second.pl
        break;
        case (bmi >= 40):
            body.style.backgroundColor = "#d90429";
            title.forEach(item =>{
                item.style.borderColor = "#d90429"
            });
            description.innerHTML = answers.obesity_third.eng
            descriptionPL.innerHTML = answers.obesity_third.pl
        break;
        default: 
        body.style.backgroundColor = "#fbf5f3";
        description.innerHTML = "Please try again!"
    }
}

check.forEach(button => {
    button.addEventListener('click', countBMI)
})

lang.addEventListener('click', changeLang)



document.addEventListener('DOMContentLoaded', function() {

    submit.disabled = true
    task.onkeyup = () => {
       if (task.value.length > 0) {
           submit.disabled = false
       } else {
           submit.disabled = true
       }
   }

    form.onsubmit = () => {
        
        const newTask = task.value;
        const li = document.createElement('li')
        li.innerHTML = newTask
        li.classList.add("li-class")
        const bt = document.createElement('button')
        bt.innerHTML = "x"
        li.append(bt)
        tasks.append(li)
        task.value = '';
        submit.disabled = true;
       

        return false
    }

    

  

})













// ANSWERS

const answers = {
    "extremelyLowBMI" : 
     {   
        "eng": "Your weight is too low and is dangerous for your health. It is strongly recommended to contact your doctor.",
        "pl": "Twoja waga jest zbyt niska i zagraża Twojemu zdrowiu. Wizyta u lekarza lub dietetyka jest niezbędna."
        },
       "veryLowBMI" : 
    {   
        "eng": "You weight is low. It is suggested to contact your dietician.",
        "pl": "Twoja waga jest niska. Rozważ wizytę u dietetyka."
        },
        "lowBMI" :
    {
        "eng":  "You are underweight. Consider gaining some weight.",
        "pl":   "Masz niedowagę. Rozważ przybranie kilku kilogramów"
        },
        "norm" : 
    {
        "eng": "Congratulations! Your weight is great! Keep on doing this way!",
        "pl" : "Gratulacje! Twoja waga jest w sam raz! Tak trzymaj!"
    },
        "overweight":
        {
        "eng": "According to BMI you are overweight. Please consider healthy diet.",
        "pl": "Zgodnie ze wskaźnikiem BMI masz nadwagę. Rozważ zdrową dietę"
    },
        "obesity_first": 
        {
        "eng": "According to BMI you are in first phase of obesity. Please be careful and contact your doctor or dietician.",
        "pl": "Zgodnie ze wskaźnikiem BMI jesteś w pierwszym stopniu otyłości. Zachowaj ostrożnośc i skontaktuj się z lekarzem lub dietetykiem."
    },
        "obesity_second":
        {
            "eng": "According to BMI you are in second phase of obesity.  It is strongly suggested to contact your doctor.",
            "pl" : "Zgodnie ze wskaźnikiem BMI jesteś w drugiej fazie otyłości. Wizyta u lekarza jest niezbędna."
    },
        "obesity_third": 
        {
            "eng": "According to BMI you are in third phase of obesity. This weight is dangerous for your health. Please contact your doctor.",
            "pl": "Zgodnie ze wskaźnikiem BMI jesteś w trzeciej fazie otyłości. Ta waga jest zagrożeniem dla Twojego zdrowia. Skontaktuj się z Twoim lekarzem."
    },
    "wrong_format":
    {
            "eng": "Please provide height in meters or centimeters",
            "pl" : "Proszę wprowadzić wysokość w metrach lub centymetrach"
    },
    "missing_input": {
        "eng": "Please fill height and weight",
        "pl" : "Proszę wprowadzić wysokość oraz wagę"
    },
    "clear_input": 
    {
        "clear": " "
    }
    
}