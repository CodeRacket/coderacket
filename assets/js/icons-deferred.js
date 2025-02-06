// this file loads icons once in 10% visitors viewport
const icons = document.querySelectorAll('.icon-lazy');
const observer = intersectionObserver((entries, observer) => {
  enteries.forEach(entry => {
    // Check if icon is in viewport
    if(entery.isIntersecting){
      // Make icon visible if in viewport
      enteries.target.classList.add('icon-loaded');
      // Then stop monitoring the icons once loaded
      observer.unobserve(entry.target);  
        
    }
  });

}, {threshold: 0.1});
//call the observer
icons.forEach(icon => observer.observe(icon));
