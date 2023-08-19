
   const button  = document.getElementById('btn');
   const body = document.body;

     function togglecolor(){
      body.classList.toggle('darkmode');
      const showtxt =  body.classList.contains('darkmode') ? 'Light-Mode' : 'Dark-Mode';
      button.innerText = `Toggle ${showtxt}`;
     }

     button.addEventListener('click',togglecolor);

