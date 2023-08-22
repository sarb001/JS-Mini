
const WordsController = document.getElementById('controller');

const lowercase = document.getElementById('lc');
const Uppercase = document.getElementById('uc');
const Number    = document.getElementById('num');
const Symbols   = document.getElementById('sym');

const ProgressBar = document.getElementById('progressbar');

const Strength     = document.getElementById('strength');
let  Character     = document.getElementById('chars');
let Inputpassword  = document.getElementById('textpassword');

// console.log('WordsController -', WordsController.style.color = 'grey');

function changeinput(e){
        let password = Inputpassword.value;
        console.log('password Data -',password);

        const PasswordLength  = getPasswordlength(password);

        const RegexpLength    = getExpressionLength(password);
        console.log('Regexp -',RegexpLength);
}

function getPasswordlength(text){
        let score = 0;
        score = text.length;
        console.log('score -',score);   
        return score;
    }

function getExpressionLength(text){
          let scorebool = 0;
            if(haslc.test(text)){
                    lowercase.style.color = 'red';
                    scorebool =  scorebool + 1;
            }
            if(hasuc.test(text)){
                    Uppercase.style.color = 'blue';
                    scorebool =  scorebool + 1;
            }
            if(hasSym.test(text)){
                    Symbols.style.color  = 'orange';
                    scorebool =  scorebool + 1;
            }
            if(hasnumber.test(text)){
                    Number.style.color   = 'green'
                    scorebool =  scorebool + 1;
            }
    
        return scorebool;
}

let hasnumber = /\d/;
let hasuc     = /[A-Z]/;
let haslc     = /[a-z]/;
let hasSym    = /[^A-Za-z0-9]/;


Inputpassword.addEventListener('input',changeinput);