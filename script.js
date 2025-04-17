document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
  
    if (!navbar) return; // Prevent errors if navbar doesn't exist
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });