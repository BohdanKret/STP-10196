document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.js-modes-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('js-visible');
        } else {
          entry.target.classList.remove('js-visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(item => observer.observe(item));
});
