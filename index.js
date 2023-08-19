
const container = document.getElementById('container');

const checkbox  = document.getElementById('check');
const redbox    = document.getElementById('red');

const text      = document.getElementById('text');


function checkboxfunction(){
       if(!checkbox.checked){
             container.classList.add('darkmode')
             container.classList.remove('red');
        }else{
            container.classList.remove('darkmode');
            container.classList.add('red');
        }
}

checkbox.addEventListener('change',checkboxfunction);

function redboxfunction(){
    if(!redbox.checked){
        container.classList.add('darkmode');
        container.classList.remove('red');
    }else{
        container.classList.remove('darkmode');
        container.classList.add('red');
    }
}

redbox.addEventListener('change', redboxfunction);

