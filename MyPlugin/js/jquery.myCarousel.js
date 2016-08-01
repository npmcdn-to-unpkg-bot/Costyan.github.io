(function($) {
  $.fn.myCarousel = function(options) {
    var defaults = {
      positionPlugin : 'center'
    };
    var settings = $.extend(defaults, options);
    var $img = $('.myC__photo');
    var curItem = 0;
    var lastItem = (curItem - 1 + $img.length) % $img.length;
    var nextItem = curItem + 1;
    var $mainObj = $('.myCarousel');
    var imgWidth = parseInt($img.eq(0).css('width'));
    var mainObjWidth = imgWidth * 2.5;
    switch (defaults.positionPlugin) {
      case 'left':
        $mainObj.css({
          left : 0
        });
        break;
      case 'right':
        $mainObj.css({
          left : parseInt($('body').css('width')) - mainObjWidth + 'px'
        });
        break;
      default:
        $mainObj.css({
          left : '50%',
          'margin-left' : - (mainObjWidth / 2) + 'px'
        });
    }
    $mainObj.css({
      width : mainObjWidth + 'px',
      height : parseInt($img.eq(0).css('height')) + 'px'
    });
    $img.eq(curItem).css({
      left : (mainObjWidth / 2) - (imgWidth / 2) + 'px',
      'z-index' : 5,
      opacity : 1
    });
    $img.eq(nextItem).css({
      left : (mainObjWidth / 2) + (imgWidth * 0.15) + 'px',
      'z-index' : 4,
      opacity : 1
    });
    $img.eq(lastItem).css({
      left : (imgWidth * 0.25) + 'px',
      'z-index' : 1,
      opacity : 1
    });
    for (var i = (nextItem + 1); i < ($img.length - 1); i++) {
      $img.eq(i).css({
        left : mainObjWidth + 1 + 'px',
        'z-index' : 0,
        opacity : 1
      });
    }

    $('.myCNext').on('click', function() {
      var itemFromOhter = (nextItem + 1 + $img.length) % $img.length;
      if($img.eq(lastItem).queue().length == 0) {
        var timerIdTmp = setTimeout (function() {
          $img.eq(nextItem).css('z-index', 3).animate({
                                      left : (mainObjWidth / 2) - (imgWidth / 2) + 'px',
                                      'z-index' : 5
                                    }, 1000);
          $img.eq(curItem).css('z-index', 2);
          curItem = (curItem + 1 + $img.length) % $img.length;
          lastItem = (curItem - 1 + $img.length) % $img.length;
          nextItem = (curItem + 1 + $img.length) % $img.length;
          clearTimeout(timerIdTmp);
        }, 1000);

        $img.eq(lastItem).css('z-index', 0).animate({
          left : mainObjWidth + 1 + 'px',
          opacity : 0
        }, 2000);
        $img.eq(curItem).animate({
          left : (imgWidth * 0.25) + 'px',
          'z-index' : 2
        }, 2000);
        $img.eq(nextItem).animate({
            left : mainObjWidth - imgWidth + 'px',
            'z-index' : 4
        }, 1000);
        $img.eq(itemFromOhter).css('z-index', 1).animate({
                                       left : (mainObjWidth / 2) + (imgWidth * 0.15) + 'px',
                                       'z-index': 4,
                                       opacity : 1
                                     }, 2000);
      }
    });

    $('.myCPrev').on('click', function() {
      var itemFromOhter = (lastItem - 1 + $img.length) % $img.length;
      if ($img.eq(nextItem).queue() == 0) {
        var timerIdTmp = setTimeout (function() {
          $img.eq(lastItem).css('z-index', 5).animate( {
                                                         left : (mainObjWidth / 2) - (imgWidth / 2) + 'px',
                                                         'z-index' : 5
                                                       }, 1000);
          $img.eq(curItem).css('z-index', 4);
          curItem = (curItem - 1 + $img.length) % $img.length;
          lastItem = (curItem - 1 + $img.length) % $img.length;
          nextItem = (curItem + 1 + $img.length) % $img.length;
          clearTimeout(timerIdTmp);
        }, 1000);
        $img.eq(nextItem).animate({
          left : mainObjWidth + 1 + 'px',
          'z-index' : 0,
          opacity :0
        }, 2000);
        $img.eq(curItem).animate({
          left : (mainObjWidth / 2) + (imgWidth * 0.15) + 'px',
          'z-index' : 4
        }, 2000);
        $img.eq(lastItem).animate({
          left : 0
        }, 1000);
        $img.eq(itemFromOhter).animate({
          left : imgWidth * 0.25 + 'px',
          'z-index' : 1,
          opacity : 1
        }, 2000);
      }
    });
  return this;
  }
})(jQuery);
