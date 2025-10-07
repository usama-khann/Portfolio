const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarButtons = sidebar.querySelectorAll('button');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

sidebarButtons.forEach(button => {
  button.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
