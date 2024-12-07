 var swiper1 = new Swiper(".swiper-container1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
		loop:true,
		autoplay:{
			delay:2000,
			disableOnInteraction:false,
		
			
		},
        pagination: {
          el: ".swiper-pagination1",
        }
      });
	  
	  
	  
	  var swiper2 = new Swiper('.swiper-container2', {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
		loop:true,
		autoplay:{
			delay:1000,
			disableOnInteraction:false,
		
			
		},
        pagination: {
          el: ".swiper-pagination2",
        },
      });


document.addEventListener("DOMContentLoaded", (event) => {
  var myCarousel = document.querySelector("#carouselExampleInterval");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Adjust the interval as needed
    ride: "carousel",
  });
});
