const divBoxes = [];

const divBox1 = document.getElementById('div-box-1');
const divBox2 = document.getElementById('div-box-2');
const divBox3 = document.getElementById('div-box-3');
const divBox4 = document.getElementById('div-box-4');
const divBox5 = document.getElementById('div-box-5');
const divBox6 = document.getElementById('div-box-6');
const divBox7 = document.getElementById('div-box-7');
const divBox8 = document.getElementById('div-box-8');
const divBox9 = document.getElementById('div-box-9');

divBoxes.push(divBox1, divBox2, divBox3, divBox4, divBox5, divBox6, divBox7, divBox8, divBox9)

// All Global Variables

let circleCheck = true;
let crossCheck = false;

let computerChance = false;

let divArray = [];

totalChances = 0;

// Functions

function randomNumberForComputer() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    algoForComputer(randomNumber)
}

function algoForComputer(number) {
    if (divArray.includes(`div-box-${number}`)) {

        randomNumberForComputer();
    } else {
        puttingXY(divBoxes[number - 1]);
    }
}

function puttingXY(div) {

    if (!computerChance) {
        computerChance = true;
        inputtingXY(div)
        return;
    } else {
        inputtingXY(div)
        computerChance = false;
        return;
    }
}

function inputtingXY(div) {
    if (!crossCheck) {
        crossCheck = true;
        circleCheck = true;
        div.textContent = 'X';
        divArray.push(div.id);
        div.style.pointerEvents = 'none';
        totalChances++
        setTimeout(() => {
            startingCompChance()
        }, 1000);

    } else if (circleCheck) {
        circleCheck = false;
        crossCheck = false;
        div.textContent = 'O';
        divArray.push(div.id);
        div.style.pointerEvents = 'none';
        totalChances++
        setTimeout(() => {
            startingCompChance()
        }, 1000);
    }
}

function startingCompChance() {
    if (!computerChance) {
        return;
    } else if (totalChances !== 9) {
        randomNumberForComputer()
    }
}



// Add event listeners.

divBox1.addEventListener('click', () => {
    puttingXY(divBox1)
})

divBox2.addEventListener('click', () => {
    puttingXY(divBox2)
})

divBox3.addEventListener('click', () => {
    puttingXY(divBox3)
})

divBox4.addEventListener('click', () => {
    puttingXY(divBox4)
})

divBox5.addEventListener('click', () => {
    puttingXY(divBox5)
})

divBox6.addEventListener('click', () => {
    puttingXY(divBox6)
})

divBox7.addEventListener('click', () => {
    puttingXY(divBox7)
})

divBox8.addEventListener('click', () => {
    puttingXY(divBox8)
})

divBox9.addEventListener('click', () => {
    puttingXY(divBox9)
})
