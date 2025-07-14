function showSection(id) {
  // Скрываем все секции
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showSection(btn.dataset.id); // функция как раньше
    });
  });

    if (!section.classList.contains('visible')) {
      section.classList.add('hidden');
    }
  }, 500);

  // Показываем нужную секцию
  const selected = document.getElementById(id);
  section.classList.remove('visible');
  setTimeout(() => section.classList.add('hidden'), 500);
}
