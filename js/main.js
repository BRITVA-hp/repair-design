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
//   document.addEventListener('keydown', (event) => {
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

  // Закрытие модального окна, при нажатии на кнопку esc.
  $(document).on('keydown', (e) => {
    if (e.key === "Escape" || e.keyCode === 27 ||e.code === "Escape") {
      modal.removeClass('modal--visible');
    };
  });

  // Слайдер
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Позиционирование кнопок и точек
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + bullets.width() + 20 + 20);
  bullets.css('left', prev.width() + 20);

  // Слайдер с цифрами
  // var swiper = new Swiper('.swiper-container1', {
  //   pagination: {
  //     el: '.swiper-pagination1',
  //     type: 'fraction',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next1',
  //     prevEl: '.swiper-button-prev1',
  //   },
  // });

  // var total = +$('.swiper-pagination-total').text();
  // var current = +$('.swiper-pagination-current').text() - 1;
  // for (i=0; i<total; i++) {
  //   $('.swiper-navigation__pagination').append('<div class="swiper-navigation__pagination--bullet">')
  // };

  // var newArr = Array.from($('.swiper-wrapper1').children());

  // newArr.forEach(function(item, x, arr) {
  //   if ($(item).hasClass('swiper-slide-active')) {
  //     var arr = Array.from($('.swiper-navigation__pagination--bullet'));
  //     arr.forEach(function(itemo, y, arr1) {
  //       if (x == y) {
  //         $(itemo).addClass('swiper-navigation__pagination--bullet-active');
  //       } else {
  //         $(itemo).removeClass('swiper-navigation__pagination--bullet-active');
  //       };
  //     });
  //   };
  // });

  // $(document).on('click', function() {
  //   newArr.forEach(function(item, x, arr) {
  //     if ($(item).hasClass('swiper-slide-active')) {
  //       var arr = Array.from($('.swiper-navigation__pagination--bullet'));
  //       arr.forEach(function(itemo, y, arr1) {
  //         if (x == y) {
  //           $(itemo).addClass('swiper-navigation__pagination--bullet-active');
  //         } else {
  //           $(itemo).removeClass('swiper-navigation__pagination--bullet-active');
  //         };
  //       });
  //     };
  //   });
  // });
  

  new WOW().init();

});
