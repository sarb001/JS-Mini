
const ProgressBar = document.getElementById('progressbar');                // 50%
const Progresscontainer = document.getElementsByClassName('progfunction'); // 100%

const Download = document.getElementById('download');

function movebar(){
    var width = 1;
    var identity = setInterval(incresewidth,1000);
    function incresewidth(){
        if(width >= 100){
            clearInterval(identity);
        }else{
            width = width + 20;                 // width + percentage increment 
            ProgressBar.style.width =  width + '%';
        }
        console.log('increase --');
    }
}

Download.addEventListener('click',movebar);
// increase bar on single Click 














// const Passwordchar = document.getElementById('char');
// const PasswordStrength = document.getElementById('strength');

// const ProgressBar = document.getElementById('progressbar');
// const Password    = document.getElementById('password');

// const lc  = document.getElementById('lc');
// const uc  = document.getElementById('uc');
// const num = document.getElementById('num');
// const sym = document.getElementById('sym');

// const Flexcontainer = document.getElementById('flex');

// function inputpassword(){
//     const checkval = Password.value;
//     console.log('checkval -',checkval);
    
//     if(checkval.length === 0){
//         Flexcontainer.disabled = true;
//     }

// }

// Password.addEventListener('input', inputpassword);
