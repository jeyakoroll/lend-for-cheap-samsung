$(document).ready(function() {
  var mainGallery = $('#main-gallery'),
      colorsGallery = $('#colors-gallery'),
      reviewsGallery = $('#reviews-gallery');
  

  // GALLERY
  // gallery colors

    colorsGallery.owlCarousel({
      loop:true,
      margin: 20,
      items: 3,
      center: true,
      // dots: true,
      nav: true,
      autoWidth: true,
      // navContainer: '.reviews__slider-link',
      // dotsContainer: '.reviews__items-list',
      responsiveClass:true
      // responsive:{
      //     0:{
      //         items: 1,
      //         margin: 200,
      //         loop: true,
      //         autoWidth: true,
      //         autoplay: true,
      //         center: true,
      //         dots: false
      //     },
      //     500:{
      //         items:1,
      //         loop: true,
      //         autoWidth: true,
      //         margin: 200,
      //         center: true,
      //         autoplay: false,
      //         dots: false
      //     },
      //     768:{
      //         items:1,
      //         loop:true,
      //         autoWidth: true,
      //         center: true,
      //         // autoWidth: false,
      //         dots: true
      //     }
      // }
  });

  // main gallery
    mainGallery.owlCarousel({
      loop:true,
      margin: 300,
      items: 1,
      center: true,
      // dots: true,
      nav: true,
      autoWidth: true,
      // navContainer: '.reviews__slider-link',
      // dotsContainer: '.reviews__items-list',
      responsiveClass:true
      // responsive:{
      //     0:{
      //         items: 1,
      //         margin: 200,
      //         loop: true,
      //         autoWidth: true,
      //         autoplay: true,
      //         center: true,
      //         dots: false
      //     },
      //     500:{
      //         items:1,
      //         loop: true,
      //         autoWidth: true,
      //         margin: 200,
      //         center: true,
      //         autoplay: false,
      //         dots: false
      //     },
      //     768:{
      //         items:1,
      //         loop:true,
      //         autoWidth: true,
      //         center: true,
      //         // autoWidth: false,
      //         dots: true
      //     }
      // }
  });


  // reviews gallery
    reviewsGallery.owlCarousel({
      loop:true,
      margin: 40,
      items: 3,
      center: true,
      dots: true,
      // nav: true,
      autoWidth: true,
      // navContainer: '.reviews__slider-link',
      // dotsContainer: '.reviews__items-list',
      responsiveClass:true
      // responsive:{
      //     0:{
      //         items: 1,
      //         margin: 200,
      //         loop: true,
      //         autoWidth: true,
      //         autoplay: true,
      //         center: true,
      //         dots: false
      //     },
      //     500:{
      //         items:1,
      //         loop: true,
      //         autoWidth: true,
      //         margin: 200,
      //         center: true,
      //         autoplay: false,
      //         dots: false
      //     },
      //     768:{
      //         items:1,
      //         loop:true,
      //         autoWidth: true,
      //         center: true,
      //         // autoWidth: false,
      //         dots: true
      //     }
      // }
  });


  // timer
  (function() {
    $(document).ready(function() {
      var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
      var t = (60 * 60 * 24) - secPassed;
      $('.timer').countdown({
        until: (t),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        format: 'HMS',
        layout: '<li><div><span>{h10}</span></div><div><span>{h1}</span></div></li><li><div><span>{m10}</span></div><div><span>{m1}</span></div></li><li><div><span>{s10}</span></div><div><span>{s1}</span></div></li>'
      });
    });
  })();


  // form
  $( '.header__bottom-list_form input[name=name_last]' ).closest( '.form-group' ).after(
    '<div class="form-group form-group__checkbox"><p class="form-group__text">Выберите цвет:</p><div class="checkbox__wrap"><input type="checkbox" id="checkbox-1-1" class="regular-checkbox" /><label for="checkbox-1-1" class="first"></label><input type="checkbox" checked id="checkbox-1-2" class="regular-checkbox" /><label for="checkbox-1-2" class="second"></label><input type="checkbox" id="checkbox-1-3" class="regular-checkbox" /><label for="checkbox-1-3" class="third"></label></div></div>'
  );

  $( '.header__bottom-list_form select[name=size]' ).addClass( 'footer__form-size' );
  $( '.header__bottom-list_form .order-form' ).addClass( 'footer__form-order' );
  $( '.header__bottom-list_form input' ).addClass( 'footer__form-data' );
  var 
      buttonInForm = $( '.header__bottom-list_form button' ),
      parentThisButton = buttonInForm.parent();

      buttonInForm.addClass( 'footer__form-button' );
      parentThisButton.addClass( 'footer__form-button_wrap' );
      
  $( '.header__bottom-list_form input[name=color]' ).addClass( 'footer__form-checkbox' );
  $('.header__bottom-list_form input[name=name_first]').attr("placeholder","Имя");
  $('.header__bottom-list_form input[name=name_last]').attr("placeholder","Телефон");

  // change the text in the button
  $(window).on('load resize', function() {
    var screenWidth = $(window).width(),
        contentButton = $('.footer__form-button'),
        isPhone = screenWidth < 480;
        
    contentButton = isPhone ? contentButton.empty().text('Заказать') : contentButton.empty().text('Заказать по акции');
  })

  // sticky menu
  $('.header__nav-link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true); 
  });

  showSection(window.location.hash, false);

});

$(window).scroll(function() {
  checkSection();
});

function showSection(section, isAnimate) {
  var 
      direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top - 50;
      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 400);
      } else {
        $('body, html').scrollTop(reqSectionPos);
      }
}

function checkSection() {
  $('.section').each((function() {
    var 
        that = $(this),
        topEdge = that.offset().top,
        bottomEdge = topEdge + that.height(),
        wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll ) {
          var
              currentId = that.data('section'),
              reqLink = $('.header__link').filter('[href="#' + currentId + '"]');

          reqLink.closest('.header__item').addClass('active__tab').siblings().removeClass('active__tab');

          window.location.hash = currentId;
        }
  }));
}