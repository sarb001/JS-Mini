
const button = document.getElementById('dialogbox');
const dialogtext = document.getElementById('dialogtext');
const closebtn = document.getElementById('close');

function showbox(){
    dialogtext.classList.toggle('open');
}

function closebox(){
    dialogtext.classList.remove('open');
}

button.addEventListener('click',showbox);
closebtn.addEventListener('click',closebox);



