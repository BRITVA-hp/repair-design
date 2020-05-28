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
        hero = $('.hero').height()/2,
        modalS = $('.modal-success');

  // При клике на любую кнопку появляется модальное окно.
  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible');
  });

  // При клике по крестику, закрывается модальное окно.
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  // При клике по крестику, закрывается модальное окно благодарности.
  $('.modal-success__close').on('click', function () {
    modalS.removeClass('modal-success--visible');
  });

  // Закрытие модального окна благодарности, при клике за его пределами.
   modalS.on('click', (event) => {
    if (modalS.is(event.target)) {
      modalS.removeClass('modal-success--visible');
    };
  });

  // Закрытие модального окна благодарности, при нажатии на кнопку esc.
  $(document).on('keydown', (e) => {
    if (e.key === "Escape" || e.keyCode === 27 ||e.code === "Escape") {
      modalS.removeClass('modal-success--visible');
    };
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

  // Функция для плавного скролла, при нажатии на кнопку "наверх" и "листайте вниз".
  $('.up').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top }, 1000);
    e.preventDefault();
  });

  $('.hero__scroll-down').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
    e.preventDefault();
  });
// Функция для плавного скролла, при нажатии на ссылку в навигации.
  $('.nav__item1').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#hero').offset().top }, 1000);
    e.preventDefault();
  });
  $('.nav__item2').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
    e.preventDefault();
  });
  $('.nav__item3').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#aim').offset().top }, 1000);
    e.preventDefault();
  });
  $('.nav__item4').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#team').offset().top }, 1000);
    e.preventDefault();
  });
  $('.nav__item5').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#clients').offset().top }, 1000);
    e.preventDefault();
  });
  $('.nav__item6').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
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
  var mySwiper = new Swiper ('.s1', {
    loop: true,
    pagination: {
      el: '.pag1',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
  });

  // Позиционирование кнопок и точек
  var next = $('.next1');
  var prev = $('.prev1');
  var bullets = $('.pag1');

  next.css('left', prev.width() + bullets.width() + 20 + 20);
  bullets.css('left', prev.width() + 20);

  // Слайдер с цифрами
  var swiper = new Swiper('.s2', {
    pagination: {
      el: '.pag2',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    },
  });

  // Переключение слайдов при нажатии на навигацию
  var navArr = Array.from($('.aim__row-right').children());
  var newArr = Array.from($('.wrapper2').children());

  // function paginF () { newArr.forEach(function(item, x, arr) {
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
  // }

  // Позиционирование кнопок и точек
  var next2 = $('.next2');
  var prev2 = $('.prev2');
  var bullets2 = $('.pag2');
  // Функция для активного меню в секции "6 шагов до цели"
  var arr = Array.from($('.pag2').children());
  arr.forEach(function(item, x, arr) {
    if ($(item).hasClass('swiper-pagination-bullet-active')) {
      var arrNew = Array.from($('.aim__row-right').children());
      arrNew.forEach(function(item1, y, arr1) {
        if (x == y) {
          $(item1).children().addClass('aim__nav-card--active');
        } else {
          $(item1).children().removeClass('aim__nav-card--active');
        }
      })
    }
  })
  $('.aim').on('click', function () {
    arr.forEach(function(item, x, arr) {
      if ($(item).hasClass('swiper-pagination-bullet-active')) {
        var arrNew = Array.from($('.aim__row-right').children());
        arrNew.forEach(function(item1, y, arr1) {
          if (x == y) {
            $(item1).children().addClass('aim__nav-card--active');
          } else {
            $(item1).children().removeClass('aim__nav-card--active');
          }
        })
      }
    })
  });
  
  next2.css('left', prev2.width() + bullets2.width() + 20 + 20);
  bullets2.css('left', prev2.width() + 20);

  // setInterval(paginF, 100);

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      policyCheckbox: "required",
      userPhone: "required",
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },  
    errorElement: "div",
    // Сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 15 символов"
      },
      policyCheckbox: "Вам нужно согласиться с обработкой данных",
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.modal__form').serialize(),
        success: function (response) {
          $('.modal__form')[0].reset();
          $('.modal-success').addClass('modal-success--visible');
          modal.removeClass('modal--visible');

        }
      });
    }

  });

  // Валидация формы в секции "Онлайн контроль"
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      controlUserPhone: "required",
      cPolicyCheckbox: "required",
    },  
    errorElement: "div",
    // Сообщения
    messages: {
      controlUserName: {
        cPolicyCheckbox: "Вам нужно согласиться с обработкой данных",
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 15 символов"
      },
      controlUserPhone: "Заполните поле",
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send1.php",
        data: $('.control__form').serialize(),
        success: function (response) {
          $('.control__form')[0].reset();
          $('.modal-success').addClass('modal-success--visible');

        }
      });
    }

  });

  // Валидация формы в секции "Остались вопросы (footer)"
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      footerUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      footerUserPhone: "required",
      fPolicyCheckbox: "required",
      // Правило-объект (блок)
      footerUserQuestion: "required"
    },  
    errorElement: "div",
    // Сообщения
    messages: {
      fPolicyCheckbox: "Вам нужно согласиться с обработкой данных",
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 15 символов"
      },
      footerUserPhone: "Заполните поле",
      footerUserQuestion: "Заполните поле"
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send2.php",
        data: $('.footer__form').serialize(),
        success: function (response) {
          $('.footer__form')[0].reset();
          $('.modal-success').addClass('modal-success--visible');

        }
      });
    }
    
  });

   // Валидация формы в "трудной" секции

   $('.request__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      requestUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      requestUserPhone: "required",
      rPolicyCheckbox: "required",
      // Правило-объект (блок)
      requestUserEmail: {
        required: true,
        email: true
      }
      
    },  
    errorElement: "div",
    // Сообщения
    messages: {
      requestUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно превышать 15 символов"
      },
      requestUserPhone: "Заполните поле",
      rPolicyCheckbox: "Вам нужно согласиться с обработкой данных",
      requestUserEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send3.php",
        data: $('.request__form').serialize(),
        success: function (response) {
          $('.request__form')[0].reset();
          $('.modal-success').addClass('modal-success--visible');

        }
      });
    }
    
  });
  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00',);

  // Карта появляется, когда доскролил
  var windowHeight = $(window).height();
  $(document).on('scroll', function() {
		$('.footer__wrap-map').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$('.footer__map').css({"display":"block"});
			}
		});
  });

  //Слайдер в секции fantasy на мобильной версии

  (function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);

  // Активация слайдера в секции fantasy
  var swiper = new Swiper('.s3', {
    navigation: {
      nextEl: '.n3',
      prevEl: '.p3',
    },
  });

});
