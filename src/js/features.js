document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.js-features-item');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('js-animate-in');
        } else {
          entry.target.classList.remove('js-animate-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach(item => observer.observe(item));
});
