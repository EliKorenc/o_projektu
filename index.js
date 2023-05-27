console.log('Ahoj planetko!');

const planetka = document.querySelector('.planetka_strach');

planetka.addEventListener('mouseover', () => {
  planetka.classList.add('shaking');
});

planetka.addEventListener('mouseout', () => {
  planetka.classList.remove('shaking');
});
