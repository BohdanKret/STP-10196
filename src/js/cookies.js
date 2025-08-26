const cookiesBanner = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.cookies-button.accept');
const declineBtn = document.querySelector('.cookies-button.decline');

const context = localStorage.getItem('cookieConsent');

if (!context || context === 'declined') {
  setTimeout(() => {
    cookiesBanner.classList.remove('visually-hidden');
    cookiesBanner.classList.add('show');
    document.body.style.overflow = 'hidden';
  }, 1000);
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  cookiesBanner.classList.add('visually-hidden');
  document.body.style.overflow = 'visible';
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'declined');
  cookiesBanner.classList.add('visually-hidden');
  document.body.style.overflow = 'visible';
});
