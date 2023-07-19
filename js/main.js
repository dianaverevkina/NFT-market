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
  if (this.scrollY > 7) {
    headerElement.classList.add('header_fixed');
  } else {
    headerElement.classList.remove('header_fixed');
  }
}

if (document.documentElement.clientWidth < 1000) {
  window.addEventListener('scroll', fixHeader);
}

const treasures = document.querySelector('.treasures');
const treasuresList = treasures.querySelectorAll('.treasure');

if (document.documentElement.clientWidth < 768) {
  for (let i = 3; i < treasuresList.length; i++){
    treasuresList[i].remove(); 
  }
}

//Слайдер для блока Creators
let swiper = new Swiper('.creators__slider', {
  keybord: {
     enabled: true,
     onlyInViewport: true,
     pageUpDown: true,
  },

  speed: 1500,
  centeredSlides: true,
  slidesPerView: 'auto',
  grabCursor: true,
  
  autoplay: {
    delay: 800,
    disableOnInteraction: true,	
    pauseOnMouseEnter: true,
  },

  slideToClickedSlide: true,
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

const subscriptionForm = document.querySelector('.subscription__form');
const subscriptionText = subscriptionForm.querySelector('.subscription__input-text');
const subscriptionInput = subscriptionForm.querySelector('.subscription__input');

function changeInput() {
  subscriptionText.classList.add('subscription__input-text_hidden');
  subscriptionInput.classList.add('subscription__input_visible');
  subscriptionInput.focus();
}

//Отправка мейла для подписки
function submitEmail (e) {
  e.preventDefault();
  subscriptionForm.clear();
  subscriptionInput.classList.remove('subscription__input_visible');
  subscriptionText.classList.remove('subscription__input-text_hidden');
}

subscriptionText.addEventListener('click', changeInput);
subscriptionForm.addEventListener('submit', submitEmail);


//Слайдер верхний для блока Companions
let companionsSliderUpper = new Swiper('.slider-companions_upper', {
  autoplay: {
    delay: 0,
		disableOnInteraction: false, 
		reverseDirection: true,
  },

  loop: true,
	spaceBetween: 12,
  slidesPerView: 'auto',
  speed: 4000,
  allowTouchMove: false, 

  breakpoints: {
    992: {
      spaceBetween: 18,
    },
  },
});

//Слайдер нижний для блока Companions
let companionsSliderLower = new Swiper('.slider-companions_lower', {
  autoplay: {
    delay: 0, 
		disableOnInteraction: false,
  },

  loop: true, 
	spaceBetween: 12,
  slidesPerView: 'auto',
  speed: 4000, 
  allowTouchMove: false, 

  breakpoints: {
    992: {
      spaceBetween: 18,
    },
  },
});

const footer = document.querySelector('.footer');
const footerMenuItems = footer.querySelectorAll('.footer-menu__item');

//Открытие подменю в footer
function showSubmenu() {
  let footerSubmenu = this.querySelector('.footer-submenu');
  footerSubmenu.classList.toggle('footer-submenu_active');
}

footerMenuItems.forEach(item => {
  item.addEventListener('click', showSubmenu);
})






