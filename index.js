
const guessnumber = document.getElementById('guess');
const submitbtn   = document.getElementById('submitbtn');
const resetagain  = document.getElementById('resetagain');
const showmsg     = document.getElementById('showmsg');

function startgame(){
     resetagain.disabled = true;
     guessnumber.value = "";
}

startgame();

function submitfunction(){
         if(guessnumber.value == 34){
             showmsg.innerText = ' Congrats!! Number Found ';
             resetagain.disabled = false;
             submitbtn.disabled = true;
             console.log('congrats');
            }else if(guessnumber.value < 34){
                showmsg.innerText  = ' Oops ! Less number ';
                console.log('Oops.....');
            }else if(guessnumber.value > 34){
                showmsg.innerText = ' Tooo Highhh ';
                console.log('Too High...');
            }
}

function resetfunction(){
    showmsg.innerText = '';
    guessnumber.value = "";
}

submitbtn.addEventListener('click'  , submitfunction);
resetagain.addEventListener('click'  , resetfunction);



