let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__nav');
let body = document.querySelector('body');

(() => {
   window.onload = () => {
      headerBurger.addEventListener('click', (e) => {
         headerBurger.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
         body.classList.toggle('lock');
      })
   }
})();

//
setTimeout((function () {
   const header = document.querySelector('.header');
   window.onscroll = () => {
      if (window.pageYOffset > 50) {
         header.classList.add('active');
      } else {
         header.classList.remove('active');
      }
   };
})());