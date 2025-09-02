const icons = document.querySelectorAll('.icon-lazy');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Force FontAwesome to render the icon (if using SVG)
      if (window.FontAwesome && window.FontAwesome.dom && window.FontAwesome.dom.i2svg) {
        window.FontAwesome.dom.i2svg({ node: entry.target });
      }

      // Reveal icon
      entry.target.classList.add('icon-lazy-loaded');

      // Stop observing this icon
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

icons.forEach(icon => observer.observe(icon));
