
const value   = document.getElementById('value');
const add     = document.getElementById('add');
const minus   = document.getElementById('minus');
const reset   = document.getElementById('reset');
const change  = document.getElementById('changeBy');


function incremntbtn(){
        value.textContent = +value.textContent + change.valueAsNumber;
}

function decremntbtn(){
        value.textContent = parseInt(value.textContent) - parseInt(change.valueAsNumber);
}

function resetbtn(){
        value.textContent = 0;
}

add.addEventListener('click' , incremntbtn);
minus.addEventListener('click' , decremntbtn);
reset.addEventListener('click' , resetbtn);