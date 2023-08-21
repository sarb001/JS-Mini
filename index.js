

const ProgressBar = document.getElementById('progressbar');                // 50%
const Progresscontainer = document.getElementsByClassName('progfunction'); // 100%

const Download = document.getElementById('download');
const ShowText = document.getElementById('showtext');


function movebar(){
    var width = 0;
    var identity = setInterval(incresewidth,1000);
    function incresewidth(){
        if(width >= 100){
            clearInterval(identity);
        }else{
            width = width + 20;                 // width + percentage increment 
            ProgressBar.style.width =  width + '%';

            ShowText.innerText = width * 1 + '%';

            if(width >= 40 && width < 60){
                ProgressBar.style.backgroundColor =  'green'
            }else if(width >= 60 && width < 80){
                ProgressBar.style.backgroundColor =  'orange';
            }
             else if(width >= 20 && width < 40){
                ProgressBar.style.backgroundColor =  'blue';
            }
        }
    }
}

Download.addEventListener('click',movebar);
// increase bar on single Click 













