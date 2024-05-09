

document.querySelectorAll('.menu a').forEach(a => {
    if (a.href === window.location.href) {
      a.setAttribute('aria-current', 'page');
    }
  });
  document.addEventListener('DOMContentLoaded', (event) => {

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
});

document.addEventListener('DOMContentLoaded', (event) => {

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

});

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('more-tabs').addEventListener('click', function() {
    var images = document.querySelectorAll('#tabs-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#tabs-images').style.display = 'block';
    document.getElementById('less-tabs').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-tabs').addEventListener('click', function() {
    var images = document.querySelectorAll('#tabs-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#tabs-images').style.display = 'none';
    document.getElementById('more-tabs').style.display = 'block';
    this.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('more-ranks').addEventListener('click', function() {
    var images = document.querySelectorAll('#ranks-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#ranks-images').style.display = 'block';
    document.getElementById('less-ranks').style.display = 'block';
    this.style.display = 'none';
  });
  document.getElementById('less-ranks').addEventListener('click', function() {
    var images = document.querySelectorAll('#ranks-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#ranks-images').style.display = 'none';
    document.getElementById('more-ranks').style.display = 'block';
    this.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('more-alertas').addEventListener('click', function() {
    var images = document.querySelectorAll('#alertas-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#alertas-images').style.display = 'block';
    document.getElementById('less-alertas').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-alertas').addEventListener('click', function() {
    var images = document.querySelectorAll('#alertas-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#alertas-images').style.display = 'none';
    document.getElementById('more-alertas').style.display = 'block';
    this.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('more-hologramas').addEventListener('click', function() {
    var images = document.querySelectorAll('#hologramas-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#hologramas-images').style.display = 'block';
    document.getElementById('less-hologramas').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-hologramas').addEventListener('click', function() {
    var images = document.querySelectorAll('#hologramas-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#hologramas-images').style.display = 'none';
    document.getElementById('more-hologramas').style.display = 'block';
    this.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById('more-mobs').addEventListener('click', function() {
    var images = document.querySelectorAll('#mobs-images img');
    images.forEach(function(image, index) {
      image.classList.add('animated-image');
      image.style.animationDelay = (index * 0.5) + 's'; // Ajusta este valor según sea necesario
      image.style.animationPlayState = 'running';
    });
    document.querySelector('#mobs-images').style.display = 'block';
    document.getElementById('less-mobs').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('less-mobs').addEventListener('click', function() {
    var images = document.querySelectorAll('#mobs-images img');
    images.forEach(function(image) {
      image.classList.remove('animated-image');
      image.style.animationDelay = '';
      image.style.animationPlayState = '';
    });
    document.querySelector('#mobs-images').style.display = 'none';
    document.getElementById('more-mobs').style.display = 'block';
    this.style.display = 'none';
  });
});

  