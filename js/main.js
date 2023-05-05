const headerElement = document.querySelector('.header');
const bodyElement = document.querySelector('body');
const icon = headerElement.querySelector('.icon');
const menuItems = headerElement.querySelector('.menu__items');

//Открыть/закрыть бургер-меню
function clickMenuBurger() {
  this.classList.toggle('icon_active');
  menuItems.classList.toggle('menu__items_active');
  bodyElement.classList.toggle('lock');
}
icon.addEventListener('click', clickMenuBurger);

//Фиксирование header и смена background 
function fixHeader() {
  // debugger;
  if (this.scrollY > 30) {
    headerElement.classList.add('header_fixed');
    menuItems.classList.add('menu__items_fixed');
  } else {
    headerElement.classList.remove('header_fixed');
    menuItems.classList.remove('menu__items_fixed');
  }
}

if (document.documentElement.clientWidth < 1000) {
  window.addEventListener('scroll', fixHeader);
}

//Слайдер
let swiper = new Swiper('.creators__slider', {
  // navigation: {
  //    nextEl: '.swiper-button-next',
  //    prevEl: '.swiper-button-prev',
  // },

  keybord: {
     enabled: true,
     onlyInViewport: true,
     pageUpDown: true,
  },

  speed: 700,
  centeredSlides: true,
  slidesPerView:'auto',
  grabCursor: true,
  
  // autoplay: {
  //   delay: 500,
  //   disableOnInteraction: true,	
  // },

  slideToClickedSlide: true,
  watchOverflow: false,

  loop: true,

  effect: 'coverflow',
  coverflowEffect: {
      slideShadows: false,
			depth: 170,
      stretch: 65,
      rotate: 0,
		},
})

let slides = document.querySelectorAll('.creator-card');
slides.forEach(slide => {
  if (slide.classList.contains('swiper-slide-active')){
    let buttons = slide.querySelectorAll('.creator-btn');
    buttons.forEach(button => {
      button.classList.add('creator-btn_active');
    })
    
  }
})



