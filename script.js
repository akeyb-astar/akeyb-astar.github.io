
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s';
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 100);
  });
  