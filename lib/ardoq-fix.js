(function($) {
  var repositionCodeMirror = function() {
    $(".CodeMirror").css('margin-top', ($("#ed_toolbar").height() + 5) + 'px');
  };
  $(document).ready(function() {
    setTimeout(function() {
      // Time out for toolbar to load
      repositionCodeMirror();
    }, 1500);
  });
  $(window).on('resize', function() {
    repositionCodeMirror();
  });
  $('#content-html').on('click', function() {
    setTimeout(function() {
      repositionCodeMirror();
    }, 1);
  });
}(jQuery));