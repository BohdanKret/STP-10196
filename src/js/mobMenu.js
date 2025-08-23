const mobMenu = document.getElementById('mobMenu');
const backdrop = document.getElementById('backdrop');
const openBtn = document.getElementById('openMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');
const links = mobMenu.querySelectorAll('a');

openBtn.addEventListener('click', onOpenMenuClick);

closeBtn.addEventListener('click', onCloseMenuClick);

backdrop.addEventListener('click', onCloseMenuClick);

links.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
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
  backdrop.classList.add('is-open');
  mobMenu.classList.add('is-open');
  openBtn.classList.add('visually-hidden');
  closeBtn.classList.remove('visually-hidden');
}

function onCloseMenuClick() {
  backdrop.classList.remove('is-open');
  mobMenu.classList.remove('is-open');
  closeBtn.classList.add('visually-hidden');
  openBtn.classList.remove('visually-hidden');
}
