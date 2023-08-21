

const Progress = document.getElementById('progressbar');                      // 50%
const Progresscontainer = document.getElementsByClassName('progfunction');      // 100%

const Progresscontroller = document.getElementById('progress-controller');      // 100%

const Start    = document.getElementById('start');
const Stop     = document.getElementById('stop');
const Reset    = document.getElementById('reset');

Stop.disabled = true;
Progresscontroller.addEventListener('click',controller);

let  isInProgress = false;
var width = 0;
let reqAnimationId;


function controller(e){
    const id = e.target.id;

    if(id === 'start' && !isInProgress){
        onstart();
    }else if(id === 'stop' && isInProgress){
        onstop();
    }else if(id === 'reset'){
        onstop();
        setProgressWidth(0);
    }
}

function onstart(){
    isInProgress = true;
    startprogress();
    Start.disabled = true;
    Stop.disabled = false;
}

function onstop(){
    Start.disabled = false;
    stoprogress();
    Stop.disabled = true;
    isInProgress = false;
}


function startprogress(){
    let progressPercent = 0.1 + getProgressWidth();     // get progress

    if(progressPercent <= 100){
         setProgressWidth(progressPercent);
         reqAnimationId = requestAnimationFrame(startprogress);     // Loop with Rpeat itself 
    }
}
// getting width to use in some function 
function getProgressWidth(){
    return +Progress.style.width.split('%')[0];
}

function setProgressWidth(progressPercent){
    Progress.style.width = progressPercent + '%';
}

function stoprogress(){
    cancelAnimationFrame(reqAnimationId);
}










// function movebar(){
//     Stop.disabled = false;
//     var identity  = setInterval(incresewidth,100);
//     function incresewidth(){
//         if(width >= 100){
//             clearInterval(identity);
//         }else{
//             width = width + 1;                                 // width + percentage increment 
//             ProgressBar.style.width =  width + '%';
//         }
//     }
// }

// function resetbar(){
//      width = 0;   
//      ProgressBar.style.width =  width + '%';
//      Start.disabled = false;
//      Stop.disabled  = false;
// }

// function stopbar(){
//     Start.disabled = true;
// }

// function beforestart(){
//     Stop.disabled = true;
// }

// beforestart();














