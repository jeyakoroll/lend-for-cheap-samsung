$(document).ready(function() {
  var mainGallery = $('#main-gallery'),
      colorsGallery = $('#colors-gallery'),
      reviewsGallery = $('#reviews-gallery');
  

  // GALLERY
  // gallery in colors area
  $(window).on('load resize', function() {
    var screenWidth = $(window).width(),
        isLaptop = screenWidth < 992;
        
    if (isLaptop) {
      colorsGallery.addClass('owl-carousel');
      colorsGallery.owlCarousel({
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                margin: 50,
                loop: true,
                nav: true,
                autoWidth: true,
                navContainer: '.colors__navs',
                autoplay: true,
                center: true,
                dots: false
            },
            480:{
                loop:true,
                margin: 100,
                items: 1,
                center: true,
                dots: false,
                nav: true,
                autoWidth: true,
                navContainer: '.colors__navs'
            },
            768:{
                loop:true,
                margin: 200,
                items: 2,
                center: true,
                dots: false,
                nav: true,
                autoWidth: true,
                navContainer: '.colors__navs'
            }
        }
      });
    } else {
       colorsGallery.removeClass('owl-carousel');
    }
  })

  // main gallery
    mainGallery.owlCarousel({
      loop:true,
      margin: 200,
      items: 1,
      center: true,
      dots: true,
      nav: true,
      autoWidth: true,
      navContainer: '.gallery__navs',
      responsiveClass:true
  });


  // reviews gallery
    reviewsGallery.owlCarousel({
      responsiveClass:true,
      responsive:{
          0:{
              items: 1,
              margin: 200,
              loop: true,
              autoWidth: true,
              autoplay: true,
              center: true,
              nav: false,
              dots: true
          },
          768:{
              items:1,
              loop: true,
              autoWidth: true,
              margin: 200,
              center: true,
              autoplay: true,
              dots: true
          },
          992:{
              loop:true,
              margin: 40,
              items: 3,
              autoplay: true,
              center: true,
              dots: true,
              autoWidth: true,
          }
      }
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


  // checkbox in top form
  $( '.header__bottom-list_form input[name=name_last]' ).closest( '.form-group' ).after(
    '<div class="form-group form-group__checkbox form-group__checkbox-top"><p class="form-group__text">Выберите цвет:</p><div class="checkbox__wrap"><input type="checkbox" id="checkbox-1-1" class="regular-checkbox" /><label for="checkbox-1-1" class="first"></label><input type="checkbox" checked id="checkbox-1-2" class="regular-checkbox" /><label for="checkbox-1-2" class="second"></label><input type="checkbox" id="checkbox-1-3" class="regular-checkbox" /><label for="checkbox-1-3" class="third"></label></div></div>'
  );

  // checkbox in bottom form
  $( '.reminder__list-form input[name=name_last]' ).closest( '.form-group' ).after(
    '<div class="form-group form-group__checkbox"><p class="form-group__text">Выберите цвет:</p><div class="checkbox__wrap"><input type="checkbox" id="checkbox-4-1" class="regular-checkbox" /><label for="checkbox-4-1" class="first"></label><input type="checkbox" checked id="checkbox-4-2" class="regular-checkbox" /><label for="checkbox-4-2" class="second"></label><input type="checkbox" id="checkbox-4-3" class="regular-checkbox" /><label for="checkbox-4-3" class="third"></label></div></div>'
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
  
  // change src of gallery image in phone size
  // $(window).on('load resize', function() {
  //   var screenWidth = $(window).width(),
  //       isPhone = screenWidth < 480;
        
  //       if (isPhone) {
  //         $('.gallery__list-item_pic-one').attr('src', 'public/img/gallery/11g-mob.png');
  //         $('.gallery__list-item_pic-two').attr('src', 'public/img/gallery/12g-mob.png');
  //         $('.gallery__list-item_pic-three').attr('src', 'public/img/gallery/13g-mob.png');
  //         $('.gallery__list-item_pic-four').attr('src', 'public/img/gallery/14g-mob.png');
  //         $('.gallery__list-item_pic-five').attr('src', 'public/img/gallery/15g-mob.png');
  //       }
  // })

  // hide mobile menu
  $('.navbar-collapse').on('click', hideSendwichMenu);
  $(document).on('click', hideSendwichMenu);

  function hideSendwichMenu () {
      $('.navbar-collapse').collapse('hide');
  }

  // show top form
  $('.buy__button-top').on('click', showTopForm);

  function showTopForm (e) {
      e.preventDefault();
      toTopForm($(this).data('form'), true);
  }

  function toTopForm(section, isAnimate) {
      var 
          reqSection = $('.header__bottom-list_price').filter('[data-section="' + section +'"]'),
          reqSectionPos = reqSection.offset().top - 55;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 350);
      }
  }

  // show bottom form
  $('.buy__button-bottom').on('click', showBottomForm);

  function showBottomForm (e) {
      e.preventDefault();
      toBottomForm($(this).data('form'), true);
  }

  function toBottomForm(section, isAnimate) {
      var 
          reqSection = $('.reminder__bottom-list_price').filter('[data-section="' + section +'"]'),
          reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 350);
      }
  }

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