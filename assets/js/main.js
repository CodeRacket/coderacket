
document.addEventListener('DOMContentLoaded', () => {
  //event delegation for the menu icon
  document.body.addEventListener('click', (event) => {
    // check if clicked element or its parent is in the menu icon
    const menuIcon = event.target.closest('#menu-icon');
    if (menuIcon) {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        navLinks.classList.toggle('active');  
      }
    }
  });
});
  
