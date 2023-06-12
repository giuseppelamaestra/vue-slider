const { createApp } = Vue

  createApp({
    data() {
       images = [
         "./imgs/01.webp",
         "./imgs/02.webp",
         "./imgs/03.webp",
         "./imgs/04.webp",
         "./imgs/05.webp",
       ]
      
    },
     
     


    methods: {
          previousSlide(){
            if(this.activeIndex === 0){
              this.activeIndex = this.images.length - 1;

            } else {
              this.activeIndex--;
            }
          },
          nextSlide(){
            if(this.activeIndex === this.images.length - 1){
              this.activeIndex = 0;

            } else {
              this.activeIndex++;
            }
          }
    }
  }).mount('#app')