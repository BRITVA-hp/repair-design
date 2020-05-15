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

// При загрузке страницы, выполняем различные скрипты.
$(document).ready(function () {

  // Получаем разные объекты со страницы.
  const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        up = $('.up'),
        hero = $('.hero').height()/2;

  // При клике на любую кнопку появляется модальное окно.
  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible');
  });

  // При клике по крестику, закрывается модальное окно.
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  // При прокрутке документа, появляется кнопка "наверх" и исчезает, когда документ прокручен до верха. 
  $(document).scroll(function (){
    let scroll = $(window).scrollTop();
  if (scroll > hero) {
    up.addClass('up--visible');
  }
  if (scroll == 0) {
    up.removeClass('up--visible');
  }
  });

  // Функция для плавного скролла, при нажатии на кнопку "наверх".
  $('.up').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top }, 1000);
    e.preventDefault();
  });

  // Закрытие модального окна, при клике за его пределами.
  modal.on('click', (event) => {
    if (modal.is(event.target)) {
      modal.removeClass('modal--visible');
    };
  });

  $(document).on('keydown', (e) => {
    if (e.key === "Escape" || e.keyCode === 27 ||e.code === "Escape") {
      modal.removeClass('modal--visible');
    };
  });
  
});
