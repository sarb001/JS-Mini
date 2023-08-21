
const Applybtn = document.getElementById('apply');
const InputNumber = document.getElementById('number');

const ProgressBar = document.getElementById('progressbar');

function Applybar(){
     let  width = 0;

      const inputValue = InputNumber.value;         // get input value 

         if(inputValue >= 0 && inputValue <= 100){
            ProgressBar.style.width = inputValue + '%';
            console.log('Width increment ');
        }else{
            alert(' Enter  Number between 0 and 100 ');
            console.log('Invalid Data');
            inputValue(' ');
        }
}

Applybtn.addEventListener('click',Applybar);
