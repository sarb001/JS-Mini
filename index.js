
const stringdata    = document.getElementById('stringtyping');

const lowercase     = document.getElementById('lowercase');
const uppercase     = document.getElementById('uppercase');
const camelcase     = document.getElementById('camelcase');         // hereInTheCase 
const pascalcase    = document.getElementById('pascalcase');        // DeadSeaInTheFort
const snakecase     = document.getElementById('snakecase');
const kebabcase     = document.getElementById('kebabcase');
const titlecase     = document.getElementById('titlecase');
const trimcase      = document.getElementById('trimcase');


function stringtyping(){

    maindata = stringdata.value.trim();     // without trim extra spaces gives Error -- undefined 
    lowercase.textContent = maindata;
    trimcase.textContent  = maindata.split(' ').join('');

    camelcase.textContent  =  maindata.split(' ').reduce((a,b) => a+b[0] ?.toUpperCase() + b.substring(1)?.toLowerCase());
    
    // Pascal Case - Make first letter capital
    pascalcase.textContent =  camelcase ?  camelcase.textContent[0].toUpperCase() + camelcase.textContent.substring(1) : '';

    lowercase.textContent = maindata.toLowerCase();
    uppercase.textContent = maindata.toUpperCase();

    snakecase.textContent = maindata.split(' ').join('_');
    kebabcase.textContent = maindata.split(' ').join('-');
    
}

stringdata.addEventListener('input',stringtyping) 

