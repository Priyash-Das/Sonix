document.getElementById('nextPageButton1').addEventListener('click', () => {
    const transitionElement = document.querySelector('.transition1');
  
    // Phase 1: Start the transition (shrink + rotate + fade out)
    transitionElement.style.opacity = '1';  // Make the transition element visible
    transitionElement.style.transform = 'scale(3) rotate(360deg)'; // Shrink and rotate out
    
    // Wait for the first transition to finish before triggering the new page
    setTimeout(() => {
      // Phase 2: New page transition (zoom and rotate in with gradual brightness)
      transitionElement.classList.add('page-transition-enter1');
      
      // Navigate to the next page after transition
      setTimeout(() => {
        window.location.href = 'faq.html'; // Update with your next page URL
      }, 525); // Delay to match the transition duration
    }, 525); // Delay for phase 1 to complete (matching the CSS timing)
});