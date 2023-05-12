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

  speed: 1500,
  centeredSlides: true,
  // slidesPerView: 4.2,
  slidesPerView: 'auto',
  grabCursor: true,
  
  autoplay: {
    delay: 800,
    disableOnInteraction: true,	
    // pauseOnMouseEnter: true,
  },

  slideToClickedSlide: true,
  watchOverflow: false,

  loop: true,

  effect: 'coverflow',
  coverflowEffect: {
      slideShadows: false,
			depth: 150,
      modifier: 1,
      stretch: 65,
      rotate: 0,
		},
})

// let slides = document.querySelectorAll('.creator-card');
// slides.forEach(slide => {
//   if (slide.classList.contains('swiper-slide-active')){
//     let buttons = slide.querySelectorAll('.creator-btn');
//     buttons.forEach(button => {
//       button.classList.add('creator-btn_active');
//     })
    
//   }
// })

const subscriptionForm = document.querySelector('.subscription__form');
const subscriptionField = subscriptionForm.querySelector('.subscription__input-wrapper');
const subscriptionText = subscriptionForm.querySelector('.subscription__input-text');
const subscriptionInput = subscriptionForm.querySelector('.subscription__input');
const subscriptionBtn = subscriptionForm.querySelector('.subscription__button');

function changeInput() {
  subscriptionText.classList.add('subscription__input-text_hidden');
  subscriptionInput.classList.add('subscription__input_visible');
  subscriptionInput.focus();
}

function submitEmail (e) {
  e.preventDefault();
  subscriptionInput.classList.remove('subscription__input_visible');
  subscriptionText.classList.remove('subscription__input-text_hidden');
}

subscriptionText.addEventListener('click', changeInput);
subscriptionForm.addEventListener('submit', submitEmail);


let companionsSliderUpper = new Swiper('.slider-companions_upper', {
  autoplay: {
    delay: 0,
		disableOnInteraction: false, 
		reverseDirection: true,
    waitForTransition: false, 
  },
  loop: true,
	spaceBetween: 18,
  slidesPerView: 'auto',
  speed: 4000,
  // waitForTransition: false,
});

let companionsSliderLower = new Swiper('.slider-companions_lower', {
  autoplay: {
    delay: 0, 
		disableOnInteraction: false,
  },
  loop: true, 
	spaceBetween: 10,
  slidesPerView: 'auto',
  speed: 4000, 
  allowTouchMove: false, 
  waitForTransition: false,
})






