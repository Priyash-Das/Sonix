const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const Y = e.pageY - btn.offsetRight;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

//

let body = document.querySelector("body");
body.addEventListener("click",function(event){
    for(let i=0; i<10; i++){
        let spark = document.createElement("n");
        spark.style.top = (event.clientY - body.offsetTop) + 'px';
        spark.style.left = (event.clientX - body.offsetLeft) + 'px';

        let randomX = (Math.random() - 0.5) * window.innerWidth / 1.5;
        let randomY = (Math.random() - 0.5) * window.innerHeight / 1.5;

        spark.style.setProperty('--randomX', randomX + "px");
        spark.style.setProperty('--randomY', randomY + "px");

        let randomSize = Math.random() * 2 + 2;
            spark.style.width = randomSize + "px";
            spark.style.height = randomSize + "px";

        let colors = ['#62d5ff','#ffffff','#a0a3b1','#3d445f'];
        let randomColor = colors[Math.floor (Math.random() * colors.length)];
        spark.style.background = randomColor;

        body.appendChild(spark);
        setTimeout(() => {
            spark.remove();
        }, 2000);
    }
});

//

let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
    
    cursor2.style.left = mouseX + "px";
    cursor2.style.top = mouseY + "px";
    
    requestAnimationFrame(animateCursor);
}

requestAnimationFrame(animateCursor);

//

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
        window.location.href = 'contact.html'; // Update with your next page URL
      }, 525); // Delay to match the transition duration
    }, 525); // Delay for phase 1 to complete (matching the CSS timing)
});