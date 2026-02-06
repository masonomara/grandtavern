jQuery(document).ready(function() {
  var duration = 1000;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop()) {
      jQuery('.top').fadeIn(duration);
    } else {
      jQuery('.top').fadeOut(duration);
    }
  });

  jQuery('.top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })
});
