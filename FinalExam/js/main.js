$(function() {
  $('a').click(function(e) {
    e.preventDefault();
  });
  $('.show').jcarousel({
    wrap: 'circular',
  });
  $('.control-prev').click(function() {
    $(this).parent().jcarousel('scroll', '-=1');
  });
  $('.control-next').click(function() {
    $(this).parent().jcarousel('scroll', '+=1');
  });
});
