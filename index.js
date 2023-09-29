
 
 const slider = document.querySelector('.slider');
 const slides = document.querySelectorAll('.slide');

 const prevBtn = document.querySelector('.prev-slide');
 const nextBtn = document.querySelector('.next-slide');

  let slideindex = 0;
  slides[slideindex].classList.add('active');            // adding or activating manually to first slide 

  nextBtn.addEventListener('click' , () => {
    slides[slideindex].classList.remove('active');     // remove where ever class active is present in  whole area 

    // if value inside slideindex is last  then moveback to 0th position else increment it normally 

    slideindex  = (slideindex  === slides.length - 1) ? 0 : slideindex + 1 ;
    slides[slideindex].classList.add('active'); 
    slider.style.transform = `translateX(-${slideindex * 100}%)` ;     
  })
  
  prevBtn.addEventListener('click' , () => {
    slides[slideindex].classList.remove('active');       

        //check if slidendex = 0 means we are at last slide then move to last array position or arr[2]here 
        // or move slideindex - 1 

    slideindex  = (slideindex  === 0) ? slides.length - 1 : slideindex - 1 ;
    slides[slideindex].classList.add('active'); 
    slider.style.transform = `translateX(-${slideindex * 100}%)` ;     
  });