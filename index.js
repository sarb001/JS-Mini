
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

// function changeinput(e){
//         let password = Inputpassword.value;
//         console.log('password Data -',password);

//         const PasswordLength  = getPasswordlength(password);
//         console.log('PasswordLength -',PasswordLength);

//         const RegexpLength    = getExpressionLength(password);
//         console.log('Regexp -',RegexpLength);

//         const strength = getPasswordStrenth(RegexpLength);


// }

// function getPasswordlength(text){
//         let score = 0;
//         score = text.length;
//         return score;
//     }

// function getExpressionLength(text){
//             let scorebool = 0;
//             let width = 0;
    
//         return scorebool;
// }

// let hasnumber = /\d/;
// let hasuc     = /[A-Z]/;
// let haslc     = /[a-z]/;
// let hasSym    = /[^A-Za-z0-9]/;


// Inputpassword.addEventListener('input',changeinput);

function checkPasswordStrength() {

    const passwordInput = document.getElementById('passwordInput').value;
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordLength = document.getElementById('passwordLength');
    const progressBar = document.getElementById('progress');

    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/;

    let strengthClass = 'strength-weak';

    if (passwordInput.length <= 23) {
        passwordLength.textContent = `Length: ${passwordInput.length}`;
        progressBar.style.width = `${(passwordInput.length / 20) * 100}%`;

        if (lowerCaseRegex.test(passwordInput) && upperCaseRegex.test(passwordInput) && numberRegex.test(passwordInput) && symbolRegex.test(passwordInput)) 
        {
            strengthClass = 'strength-strong';

        } else if ((lowerCaseRegex.test(passwordInput) || upperCaseRegex.test(passwordInput)) && (numberRegex.test(passwordInput) && symbolRegex.test(passwordInput))) 
        {
            strengthClass = 'strength-medium';

        } else if (lowerCaseRegex.test(passwordInput) || upperCaseRegex.test(passwordInput) || numberRegex.test(passwordInput) || symbolRegex.test(passwordInput))
        {
             strengthClass = 'strength-weak';

        }
    } else {
        passwordLength.textContent = 'Length: 0';
        progressBar.style.width = '0%';
    }

    passwordStrength.textContent = 'Strength: ' + strengthClass.split('-')[1].charAt(0).toUpperCase() + strengthClass.split('-')[1].slice(1);
    passwordStrength.className = strengthClass;
}

checkPasswordStrength();