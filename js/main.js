// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close')
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible')
//   };
  
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);
//   document.addEventListener('keypress', (event) => {
//         if (event.keyCode === 27) {
//           modal.classList.remove('modal--visible');
//         }
//       });

//   modal.addEventListener('click', (event) => {
//     if (event.target == modal) {
//       modal.classList.remove('modal--visible');
//     }
//   });
// });
$(document).ready(function () {
  const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  const up = $('.up');
  $(document).scroll(function () {
    up.addClass('up--visible');
  });
  up.on('mouseleave', function () {
    up.removeClass('up--visible');
  });
  $('.up').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top }, 1000);
    e.preventDefault();
  });
});