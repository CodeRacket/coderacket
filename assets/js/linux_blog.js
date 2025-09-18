
  // Remove focus from any element on page load to prevent sticky focus on Chrome after navigation
    window.addEventListener('pageshow', () => {
      document.activeElement?.blur();
    });

    // Fade in the hero card on page load
    document.addEventListener('DOMContentLoaded', () => {
      const hero = document.querySelector('.hero-card');
      if (hero) {
        // Trigger CSS transition by toggling class
        requestAnimationFrame(() => {
          hero.classList.add('visible');
        });
      }
    });
  