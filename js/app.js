
$(function() {
  
 // ===== text rotator ===== 
 var arr = [
    'I am',
    'I\'m awesome!',
    'I\'m an explorer',
    'I\'m just cool',
    'Don\'t you think?'
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

/* asta merge!!!!

(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:500, pauseSpeed:100});
 });

pana aici!!!!!*/ 

/*
function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        messages.length == true; //aici era alertul
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
       var i = $('#message').html(messages.shift()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
	   messages += i;
    }
};
// list of messages to display
var messages = [
    "I am",
    "I'm awesome!",
    "I'm an explorer",
    "I'm just cool",
    "Don't you think?"
];

// initially hide the message
$('#message').hide();

// start animation
nextMsg();

/*
var text = ["Welcome", "Hi", "Sup dude"];
var i = 0;
var elem = document.getElementById("message");
setInterval(change, 2000);
function change() {
 elem.innerHTML = text[i];
    i++;
    if(i >= text.length) { i = 0; }
}
*/