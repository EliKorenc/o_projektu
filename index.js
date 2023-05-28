const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', function () {
  menu.classList.toggle('open');
});

const footerElm = document.getElementById('footer');
footerElm.innerHTML = `
  <a
  class="footer__odkaz--akademie"
  href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
  target="_blank"
  >DA WEB, 2023</a
>
<div class="footer__odkaz--czechitas">
  <a href="https://www.czechitas.cz/" target="_blank"
    ><img src="./img/logo_czechitas.svg" alt="logo Czechitas z.ú."
  /></a>
</div>
`;
