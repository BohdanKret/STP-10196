const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.accordion-item');
    const iconUse = header.querySelector('.accordion-icon use');
    
    // Перевіряємо, чи має батьківський елемент клас 'active'
    const isActive = accordionItem.classList.contains('active');
    
    // Перемикаємо клас 'active'
    accordionItem.classList.toggle('active');

    // Оновлюємо посилання на іконку
    if (isActive) {
      // Якщо акордеон був активний (і мав стрілку вниз), ставимо стрілку вгору
      iconUse.setAttribute('href', './img/icons.svg#icon-up');
    } else {
      // Якщо акордеон був закритий, ставимо стрілку вниз
      iconUse.setAttribute('href', './img/icons.svg#icon-down');
    }
  });
});