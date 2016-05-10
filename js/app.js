
$(function() {
  
 // ===== text rotator ===== 
 var arr = [
    'I\'m an optimist',
    'I\'m a dreamer',
    'I\'m a curious person',
    'I\'m an explorer',
    'I\'m a planner',
    'I\'m a stubborn person',
    'I\'m a challenger',
    'I\'m a games player',
    'I\'m a stranger',
    'I\'m a maker'
    ];
  
  $('.rotator')
    .data('intervalLink', window.setInterval(function() {
      var i = arguments.callee.i ? arguments.callee.i : 0,
        message = arr[i];
      $('.rotator').animate({
        opacity: 0
      }, 500, function() {
        $(this).html(message);
      }).animate({
        opacity: 1
      }, 500);
      arguments.callee.i = (i++ == (arr.length - 1)) ? 0 : i++;
    }, 3000));
  
  // ===== smooth scroll ===== 
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
