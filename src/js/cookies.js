const cookiesBanner = document.querySelector('.js-cookies');
const acceptBtn = document.querySelector('.js-cookies-button.js-accept');
const declineBtn = document.querySelector('.js-cookies-button.js-decline');

const context = localStorage.getItem('cookieConsent');

if (!context) {
  setTimeout(() => {
    cookiesBanner.classList.remove('js-visually-hidden');
    cookiesBanner.classList.add('show');
    document.body.style.overflow = 'hidden';
  }, 1000);
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  cookiesBanner.classList.add('js-visually-hidden');
  document.body.style.overflow = 'visible';
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'declined');
  cookiesBanner.classList.add('js-visually-hidden');
  document.body.style.overflow = 'visible';
});
