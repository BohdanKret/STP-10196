const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.accordion-item');
    const iconUse = header.querySelector('.accordion-icon use');
    const isActive = accordionItem.classList.contains('active');
       
    accordionItem.classList.toggle('active');
   
    if (isActive) {
      iconUse.setAttribute('href', './public/icons.svg#icon-arrow-up');
    } else {
      iconUse.setAttribute('href', './public/icons.svg#icon-arrow-down');
    }
  });
});