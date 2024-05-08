document.querySelectorAll('.menu a').forEach(a => {
    if (a.href === window.location.href) {
      a.setAttribute('aria-current', 'page');
    }
  });
  
  document.getElementById('more-guis').addEventListener('click', function() {
    var images = document.querySelectorAll('#guis-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#guis-images').style.display = 'block';
    document.getElementById('less-guis').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-guis').addEventListener('click', function() {
    var images = document.querySelectorAll('#guis-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#guis-images').style.display = 'none';
    document.getElementById('more-guis').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('more-scoreboard').addEventListener('click', function() {
    var images = document.querySelectorAll('#scoreboard-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#scoreboard-images').style.display = 'block';
    document.getElementById('less-scoreboard').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-scoreboard').addEventListener('click', function() {
    var images = document.querySelectorAll('#scoreboard-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#scoreboard-images').style.display = 'none';
    document.getElementById('more-scoreboard').style.display = 'block';
    this.style.display = 'none';
  });