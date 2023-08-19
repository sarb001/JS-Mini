
const button = document.getElementById('dialogbox');
const dialogtext = document.getElementById('dialogtext');

function showbox(){
    dialogtext.classList.toggle('open');
}

button.addEventListener('click',showbox);


