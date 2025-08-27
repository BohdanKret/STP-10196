document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.features-item');
//   console.log(items); // перевірка

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach(item => observer.observe(item));
});
