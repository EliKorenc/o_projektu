const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  });
});
