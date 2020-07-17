$(document).ready(function () {
  // init masonry
  var $grid = $('.js-masonry').masonry({
    itemSelector: '.grid-item',
    columnWidth: $(this).find('.grid-sizer')[0],
    percentPosition: true
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });

  // scroll down on jumbotron arrow icon click
  $(".js-click").click(function () {
    $('html, body').animate({
      scrollTop: $(".footer").offset().top
    }, 800);
  });
});
