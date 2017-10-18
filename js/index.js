(function() {

  var jukeBox = document.querySelector('audio');

  var playJuke = document.querySelector('.play');
  var pauseJuke = document.querySelector('.pause');
  var stopJuke = document.querySelector('.stop');
  var nextJuke = document.querySelector('.next');
  var prevJuke = document.querySelector('.prev');

  var songs = ['audio/song1.mp3', 'audio/song2.mp3']


  playJuke.addEventListener('click', function() {
    jukeBox.play();
  });

  pauseJuke.addEventListener('click', function() {
    jukeBox.pause();
  });

  stopJuke.addEventListener('click', function() {
    jukeBox.currentTime = 0;
    jukeBox.pause();
  });

  nextJuke.addEventListener('click', function() {
    jukeBox.src = songs[1];
    jukeBox.play();
  });

  prevJuke.addEventListener('click', function() {
    jukeBox.src = songs[0];
    jukeBox.play();
  });

})();
