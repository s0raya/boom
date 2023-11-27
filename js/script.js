// 

const userInput = document.getElementById('userInput');
const countDown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let userInputNumber;
let counter = 5;
let randomNumber = Math.floor(Math.random() * 3) + 1;
let myInterval;

// Controlamos presionar la tecla enter y que la casilla no esté vacia
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && userInput.value !== '') {
        createInterval();
    };
});

//controlamos que unicamente se haga click fuera del input y que la casilla no esté vacia
window.addEventListener('click', (event) => {
    if (!userInput.contains(event.target) && userInput.value !== '') {
        createInterval();
    };
});


function myTimer() {
    if (counter >= 0) {
        countDown.innerHTML = `<p class="red">Cuenta atrás: ${counter} segundos</p>`;
        counter--;
    } else {
        checkNumber();
        clearInterval(myInterval);
    }
    
};


function checkNumber() {
    userInputNumber = parseInt(userInput.value);
    if (userInputNumber === randomNumber) {
        result.innerHTML = `
        <p class="green">Enhorabuena, has salvado el mundo</p>
        <p>Tu número: ${userInputNumber} es el mismo que el ${randomNumber}</p>
    `;
    } else {
        result.innerHTML = `
        <p class="red">La bomba ha estallado</p>
        <p>Tu número: ${userInputNumber} no es el mismo que el ${randomNumber}</p>
    `;
    }
    userInput.value = '';
}

restart.addEventListener('click', () => {
    location.reload();
});

/*************** sin promesa **************************/

/*function createInterval() {
    myInterval = setInterval(myTimer, 1000);
}*/


/******************* con promesa ***************************/

function createInterval() {
    const myPromise = new Promise(() => {
        myInterval = setInterval(myTimer, 1000);
    })
    .then(() => {
        checkNumber();
    });
}


