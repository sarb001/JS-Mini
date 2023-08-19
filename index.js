
   const button  = document.getElementById('btn');
   const container  = document.getElementById('container');

    let curretmode  = 'lightmode';

    function togglefunction(){
          if(curretmode === 'lightmode'){
              container.classList.remove('lightmode');
             container.classList.add('darkmode');
             curretmode = 'darkmode';
          }else if(curretmode === 'darkmode'){
            container.classList.remove('darkmode');
            container.classList.add('lightmode');
            curretmode = 'lightmode';
          }
          button.textContent = `Toggle ${curretmode}`
    }

   button.addEventListener('click' , togglefunction);
   