const INPUT_RANGE = document.querySelector('#rangeLength');
const INPUT_NUMBER = document.querySelector('#numberLength');

INPUT_RANGE.addEventListener('input', syncLength);
INPUT_NUMBER.addEventListener('input', syncLength);

function syncLength(e) {
    const value = e.target.value;
    INPUT_RANGE.value = value;
    INPUT_NUMBER.value = value;
}

const FORM_GENERATOR = document.querySelector('#passwordGeneratorForm');

FORM_GENERATOR.addEventListener('submit', e => {
    e.preventDefault();

    const INPUT_UPPERCASE = document.querySelector('#uppercase').checked;
    const INPUT_LOWERCASE = document.querySelector('#lowercase').checked;
    const INPUT_NUMBERS = document.querySelector('#numbers').checked;
    const INPUT_SYMBOLS = document.querySelector('#symbols').checked;
    const INPUT_LENGHT = document.querySelector('#numberLength').value;

    let settings = {
        lowercase : INPUT_LOWERCASE,
        uppercase : INPUT_UPPERCASE,
        symbols : INPUT_SYMBOLS,
        numbers : INPUT_NUMBERS
    }

    getRandomPassword(settings, INPUT_LENGHT)

})

function getRandomUppercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
    const symbols = '{}[]<>!"#$%&/()@*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomPassword(settings, long) {
    let password = '';
    let x = 0;

    while(x < long) {

        if(settings.lowercase) {
            password += getRandomLowercase();
            x++;
        }

        if(settings.uppercase) {
            password += getRandomUppercase();
            x++;
        }

        if(settings.numbers) {
            password += getRandomNumbers();
            x++;
        }

        if(settings.symbols) {
            password += getRandomSymbols();
            x++;
        }
    }
    
    document.querySelector('#password').textContent = password;
}