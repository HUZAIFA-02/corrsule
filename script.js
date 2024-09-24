// document.addEventListener('DOMContentLoaded', (event) => {
//     const circle = document.getElementById('circle');
//     const leftArrow = document.getElementById('left-arrow');
//     const rightArrow = document.getElementById('right-arrow');
//     const owlCarousel = $('.owl-carousel');
  
//     // Initialize the carousel
//     owlCarousel.owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       autoplay:true,
//       autoplayTimeout:8000,
//       stagePadding:50,
//       responsive: {
//         0: { items: 1 },
//         600: { items: 1 },
//         1000: { items: 2 }
//       }
//     });
  
//     document.addEventListener('mousemove', (e) => {
//       const circleWidth = circle.offsetWidth;
//       const windowWidth = window.innerWidth;
  
//       circle.style.left = `${e.clientX - circleWidth / 2}px`;
//       circle.style.top = `${e.clientY - circleWidth / 2}px`;
  
//       if (e.clientX > windowWidth / 2) {
//         leftArrow.style.display = 'none';
//         rightArrow.style.display = 'block';
//       } else {
//         leftArrow.style.display = 'block';
//         rightArrow.style.display = 'none';
//       }
//     });
  
//     circle.addEventListener('click', () => {
//       if (rightArrow.style.display === 'block') {
//         owlCarousel.trigger('next.owl.carousel');
//       } else {
//         owlCarousel.trigger('prev.owl.carousel');
//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', (event) => {
  const circle = document.getElementById('circle');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  const owlCarousel = $('.owl-carousel');

  // Initialize the carousel
  owlCarousel.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 8000,
      stagePadding: 50,
      responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 2 }
      }
  });

  document.addEventListener('mousemove', (e) => {
      const circleWidth = circle.offsetWidth;
      const windowWidth = window.innerWidth;

      // Show the circle
      circle.style.display = 'flex';
      circle.style.left = `${e.clientX - circleWidth / 2}px`;
      circle.style.top = `${e.clientY - circleWidth / 2}px`;

      if (e.clientX > windowWidth / 2) {
          leftArrow.style.display = 'none';
          rightArrow.style.display = 'block';
      } else {
          leftArrow.style.display = 'block';
          rightArrow.style.display = 'none';
      }
  });

  // Hide the circle when mouse leaves the window
  document.addEventListener('mouseleave', () => {
      circle.style.display = 'none';
  });

  circle.addEventListener('click', () => {
      if (rightArrow.style.display === 'block') {
          owlCarousel.trigger('next.owl.carousel');
      } else {
          owlCarousel.trigger('prev.owl.carousel');
      }
  });
});
