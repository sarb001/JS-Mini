
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener('click' , () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1    // if matches  for next = 1 && prev = -1
        const slides = button                   //select the slides w.r.t to button click 
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")  // set  the active slide
      console.log('activeSlide -',activeSlide);     //gives us full <li> </li>

      let newIndex = [...slides.children].indexOf(activeSlide) + offset;        
      console.log('newindex -',newIndex);

      if(newIndex < 0) 
      {
          newIndex = slides.children.length - 1        // always -1 the current length to get back to last img  
          console.log('newIndex img 1-',newIndex);
      }

      if(newIndex >= slides.children.length) 
      {
          newIndex = 0        // when reached at last 3rd img for ex
          console.log('newIndex img 2-',newIndex);
      }
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})