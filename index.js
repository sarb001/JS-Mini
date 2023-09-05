
const Applybtn = document.getElementById('apply');
const InputNumber = document.getElementById('number');

const ProgressBar = document.getElementById('progressbar');

function Applybar(){
     let  width = 0;

      const inputValue = InputNumber.value;         // get input value 

         if(inputValue >= 0 && inputValue <= 30){
            ProgressBar.style.width = inputValue + '%';
            ProgressBar.style.backgroundColor = 'red' ;
            console.log('Width 0 - 30 ');
        }else if(inputValue >= 30 && inputValue <= 70){
            ProgressBar.style.width = inputValue + '%';
            ProgressBar.style.backgroundColor = 'yellow' ;
            console.log('Width 30 - 70 ');
        }else if(inputValue >= 70 && inputValue <= 100){
            ProgressBar.style.width = inputValue + '%';
            ProgressBar.style.backgroundColor = 'green' ;
            console.log('Width 70 - 100 ');
        }else{
            alert(' Enter  Number between 0 and 100 ');
            console.log('Invalid Data');
            inputValue(' ');
        }
}

Applybtn.addEventListener('click',Applybar);
