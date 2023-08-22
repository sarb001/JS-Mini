
const WordsController = document.getElementById('controller');

const lowercase = document.getElementById('lc');
const Uppercase = document.getElementById('uc');
const Number    = document.getElementById('num');
const Symbols   = document.getElementById('sym');

const ProgressBar = document.getElementById('progressbar');

const Strength     = document.getElementById('strength');
let  Character    = document.getElementById('chars');
let Inputpassword = document.getElementById('textpassword');

console.log('WordsController -',WordsController.style.color = 'grey');

function changeinput(e){
        let password = Inputpassword.value;
        console.log('password Data -',password);

        let Character = getPasswordlength(password);
        console.log('character length -',Character);
}

function getPasswordlength(text){
        let score = 0;
        score = text.length;
        return score;
}


Inputpassword.addEventListener('input',changeinput);