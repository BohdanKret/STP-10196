const accordionHeaders = document.querySelectorAll('.js-accordion-header');
const iconUse = accordionHeaders[0].querySelector('.js-accordion-icon use');
const iconsSpritePath = iconUse.getAttribute('href').split('#')[0];

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.js-accordion-item');
    const iconUse = header.querySelector('.js-accordion-icon use');
    const isActive = accordionItem.classList.contains('active');

    accordionItem.classList.toggle('active');
    if (isActive) {
      iconUse.setAttribute('href', `${iconsSpritePath}#icon-arrow-down`);
    } else {
      iconUse.setAttribute('href', `${iconsSpritePath}#icon-arrow-up`);
    }
  });
});