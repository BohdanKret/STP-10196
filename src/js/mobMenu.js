const mobMenu = document.getElementById('js-mobMenu');
const backdrop = document.getElementById('js-backdrop');
const openBtn = document.getElementById('js-openMenuBtn');
const closeBtn = document.getElementById('js-closeMenuBtn');
const links = mobMenu.querySelectorAll('js-header_nav-link');

openBtn.addEventListener('click', onOpenMenuClick);

closeBtn.addEventListener('click', onCloseMenuClick);

backdrop.addEventListener('click', onCloseMenuClick);

links.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.body.style.overflow = 'visible';
      const section = document.querySelector(targetId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onCloseMenuClick();
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    onCloseMenuClick();
  }
});

function onOpenMenuClick() {
  backdrop.classList.add('js-is-open');
  mobMenu.classList.add('js-is-open');
  openBtn.classList.add('js-visually-hidden');
  closeBtn.classList.remove('js-visually-hidden');
  document.body.style.overflow = 'hidden';
}

function onCloseMenuClick() {
  backdrop.classList.remove('js-is-open');
  mobMenu.classList.remove('js-is-open');
  closeBtn.classList.add('js-visually-hidden');
  openBtn.classList.remove('js-visually-hidden');
  document.body.style.overflow = 'visible';
}
