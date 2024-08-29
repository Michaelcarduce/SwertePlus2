document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const slideCount = slideImages.length;
    const imageWidth = 255; // Fixed width of each image
  
    let index = 0;
  
    // Clone the entire set of images
    for (let i = 0; i < slideCount; i++) {
      const cloneFirstSet = slideImages[i].cloneNode(true);
      slides.appendChild(cloneFirstSet);
    }
  
    for (let i = 0; i < slideCount; i++) {
      const cloneLastSet = slideImages[i].cloneNode(true);
      slides.insertBefore(cloneLastSet, slideImages[0]);
    }
  
    // Set initial position to the first cloned image set
    slides.style.transform = `translateX(-${slideCount * imageWidth}px)`;
  
    function autoSlide() {
      index++;
      slides.style.transform = `translateX(-${(slideCount + index) * imageWidth}px)`;
      slides.style.transition = 'transform 1s linear';
  
      // When we've slid past the original set, reset without the user noticing
      if (index >= slideCount) {
        setTimeout(() => {
          slides.style.transition = 'none'; // Disable transition for reset
          index = 0; // Reset index
          slides.style.transform = `translateX(-${slideCount * imageWidth}px)`; // Move back to the original set
        }, 1000); // Wait for the transition to complete
      }
    }
  
    setInterval(autoSlide, 2000);
  
    // Recalculate visible images on resize (optional)
    window.addEventListener('resize', () => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${(slideCount + index) * imageWidth}px)`;
    });
  });
  