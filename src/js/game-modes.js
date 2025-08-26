document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.game-modes');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 } // секція повинна бути видно хоча б на 30%
  );

  observer.observe(section);
});
