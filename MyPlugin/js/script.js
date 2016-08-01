$(function() {
/////////////////// Карусель ///////////////////////////////////////////////////
  $('.myCarousel').myCarousel({
    // positionPlugin : 'left'
  });

/////////////////// Работа с шаблонизатором ////////////////////////////////////
  var $tmplObj = $('#template');
  var $template = $tmplObj.html();
  $tmplObj.html('').remove();
  var tmpl = _.template($template);
  $('.templateTest').append(tmpl(user));
});
