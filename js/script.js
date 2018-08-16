(function() {
  $('.icon').click(function(){
    $('html, body').animate({
      scrollTop: $(".secondSection").offset().top
    }, 5000);
  });


}());
