(function($, window, document) {

  // Add .animate class on body once it's loaded
  $('body').addClass('animate');

  // Share Button
  $('.share-action').click(function(e) {
    e.preventDefault();

    var url = $(this).attr('href'),
        w = 500,
        h = 400,
        left = (screen.width / 2) - (w / 2),
        top = (screen.height / 2) - (h / 2);

    window.open(url, 'Social Share', 'toolbar=no, location=no, directories=no, status=no,' +
    ' menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    return false;
  });

  // Play HTML5 video when scrolled to
  var videos = document.getElementsByTagName("video"),

  fraction = 0.8;

  function checkScroll() {
    for(var i = 0; i < videos.length; i++) {

      var video = videos[i];

      var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
          b = y + h, //bottom
          visibleX, visibleY, visible;

      visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
      visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

      visible = visibleX * visibleY / (w * h);

      if (visible > fraction) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);

}(window.jQuery, window, document));