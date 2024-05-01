document.querySelectorAll('.menu a').forEach(a => {
    if (a.href === window.location.href) {
      a.setAttribute('aria-current', 'page');
    }
  });
  