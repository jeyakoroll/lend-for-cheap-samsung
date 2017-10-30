$(document).ready(function() {

  // form
  $( '.header__bottom-list_form input[name=name_last]' ).closest( '.form-group' ).after(
    '<div class="form-group form-group__checkbox"><p class="form-group__text">Выберите цвет:</p><div class="checkbox__wrap"><input type="checkbox" id="checkbox-1-1" class="regular-checkbox" /><label for="checkbox-1-1" class="first"></label><input type="checkbox" checked id="checkbox-1-2" class="regular-checkbox" /><label for="checkbox-1-2" class="second"></label><input type="checkbox" id="checkbox-1-3" class="regular-checkbox" /><label for="checkbox-1-3" class="third"></label></div></div>'
  );

  $( '.header__bottom-list_form select[name=size]' ).addClass( 'footer__form-size' );
  $( '.header__bottom-list_form .order-form' ).addClass( 'footer__form-order' );
  $( '.header__bottom-list_form input' ).addClass( 'footer__form-data' );
  $( '.header__bottom-list_form button' ).addClass( 'footer__form-button' );
  $( '.header__bottom-list_form input[name=color]' ).addClass( 'footer__form-checkbox' );
  $('.header__bottom-list_form input[name=name_first]').attr("placeholder","Имя");
  $('.header__bottom-list_form input[name=name_last]').attr("placeholder","Телефон");

});


