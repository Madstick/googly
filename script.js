

document.addEventListener('mousemove', function(event) {
    const eyes = document.querySelectorAll('.eye');
  
    eyes.forEach(eye => {
      // Get the bounding rectangle of the eye, considering the viewport's current scroll position
      const { left, top, width, height } = eye.getBoundingClientRect();
      // Calculate the center of the eye, adding window's scroll offset to account for scrolling
      const eyeCenterX = left + width / 2;
      const eyeCenterY = top + height / 2 + window.scrollY; // Add scrollY for vertical scroll
      // Calculate the difference between the mouse position and the eye's center
      const deltaX = event.pageX - eyeCenterX;
      const deltaY = event.pageY - eyeCenterY;
      // Limit the movement to a maximum radius, for example, a quarter of the eye's width
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), width / 4);
      const angle = Math.atan2(deltaY, deltaX);
      // Calculate the new position for the pupil
      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);
  
      // Apply the calculated positions to move the pupil
      eye.style.setProperty('--pupil-x', `${pupilX}px`);
      eye.style.setProperty('--pupil-y', `${pupilY}px`);
    });
  });
  
  document.addEventListener('scroll', function() {
    const scrollPosition = scrollY;
    const parallaxSections = document.querySelectorAll('.parallax-section');

    parallaxSections.forEach(function(section) {
      const speed = section.dataset.speed; // Speed factor, defined in HTML data-speed attribute
      const movement = (scrollPosition * speed) % window.innerHeight;
      
      section.style.transform = `translateY(${movement}px)`;
    });
  });
  
