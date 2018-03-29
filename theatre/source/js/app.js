$(function() {
  $('.navigation-search__wrap').slideUp();
  $('.js-search-nav').click(function(event) {
    $('.navigation-search__wrap').css('opacity', '1');
    $('.navigation-search__wrap').slideToggle();
  });

  $('.js-nav-bar').click(function(event) {
    $('.header-mobile').toggleClass('show');
    $('.body-wrapper').toggleClass('show');
  });
  $('.js-button-x').click(function(event) {
    $('.header-mobile').removeClass('show');
    $('.body-wrapper').removeClass('show');
  });
});
