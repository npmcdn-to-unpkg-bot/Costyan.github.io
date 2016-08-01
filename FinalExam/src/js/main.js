$(function() {
  var start = ['Sport and Activity', 'Wellnes and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture and Education', 'Relaxation', 'Travelling'];
  var myTimeOut = null;
  var res = [];
  function showResult() {
    for (var i = 0; i < 7; i++) {
      $('.mosaic__image').eq(i).css('background-image', 'url(' + res[i].url + ')');
      $('.mosaic__image').eq(i).html(res[i].keywords);
    }
    clearTimeout(myTimeOut);
  }
  $('a').click(function(e) {
    e.preventDefault();
  });
  $('.show').jcarousel({
    wrap: 'circular',
  });
  $('.control-prev').click(function(e) {
    e.preventDefault();
    $(this).parent().jcarousel('scroll', '-=1');
  });
  $('.control-next').click(function(e) {
    e.preventDefault();
    $(this).parent().jcarousel('scroll', '+=1');
  });
  $('.mosaic__images').masonry({
    itemSelector: '.mosaic__image',
    columnWidth: '.mosaic__image',
    gutter: 20
  });
  myTimeOut = setInterval(showResult, 500);
  for(var i = 0; i < 7; i++) {
    $.getJSON('http://api.pixplorer.co.uk/image?word='+start[i]+'&amount=7&size=tb', function(data) {
      res.push({keywords: data.images[0].word, url: data.images[0].imageurl});
    });
  }
  $('.mosaic__search__btn').click(function(e) {
    e.preventDefault();
    query = $('.mosaic__search__input').val();
    $('.mosaic__search__input').val('');
    $.getJSON('http://api.pixplorer.co.uk/image?word=' + query + '&amount=7&size=tb', function(data) {
      for (var i = 0; i < 7; i++) {
        $('.mosaic__image').eq(i).css('background-image', 'url(' + data.images[i].imageurl + ')');
        $('.mosaic__image').eq(i).html(data.images[i].word);
      }
    });
  });
});
