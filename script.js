const menu = document.querySelector('.check-icon');
const navBar = document.querySelector('.nav-bar');

let isClicked = true;
menu.addEventListener('change', function (e) {
    if (this.checked) {
        navBar.style.display = 'block';
        navBar.classList.add('slide-in-top');
    }else{
        navBar.style.display = 'none';
        // navBar.classList.add('slide-out-top');
        navBar.classList.remove('slide-in-top');
    }
})






//  swiper js
var swiper = new Swiper("#mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  console.log(swiper)
