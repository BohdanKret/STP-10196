// document.addEventListener('DOMContentLoaded', function () {
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target); // показати тільки один раз
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   document.querySelectorAll('.features-title, .features-item').forEach(el => {
//     observer.observe(el);
//   });
// });
