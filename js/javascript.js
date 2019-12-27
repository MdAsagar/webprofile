// this code for content change without page load
$(document).on('click', '.map-point-sm', function() {
    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
  });
  // here end