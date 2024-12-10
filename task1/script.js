let containers = document.querySelectorAll('.container');
let containerWrapper = document.querySelector('.container-wrapper');
let currentIndex = 0;
let isScrolling = false;
let startY = 0;
const length = containers.length;

// Function to move containers in a circular manner
function moveContainers() {
  containers.forEach((container, index) => {
    let offset = (((index - currentIndex)+length) % length) * 100 + '%'; 
    container.style.transform = `translateY(${offset})`; 
  });
}

// Event listener for scroll 
document.addEventListener('wheel', (e) => {
  if (isScrolling) return; 
  isScrolling = true;

  if (e.deltaY > 0) {
    // Scroll down
    currentIndex = (currentIndex + 1) % length;
  } else {
    // Scroll up
    currentIndex = (currentIndex - 1 ) % length;
  }
  
  moveContainers();

  // Reset scrolling flag after the transition duration
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Wait for 1 second to allow smooth transition
});

// Event listener for mouse down (to start dragging)
containerWrapper.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startY = e.clientY;
  containerWrapper.style.cursor = 'grabbing';
});

// Event listener for mouse move (while dragging)
document.addEventListener('mousemove', (e) => {
  if (!isScrolling) return;

  let deltaY = e.clientY - startY; 
  if (deltaY < -10) {
    currentIndex = (currentIndex + 1) % length;
    startY = e.clientY;
    moveContainers();
  } else if (deltaY > 10) {
    currentIndex = (currentIndex - 1 +length) % length;
    startY = e.clientY;
    moveContainers();
  }
});

// Event listener for mouse up (to stop dragging)
document.addEventListener('mouseup', () => {
  isScrolling = false;
  containerWrapper.style.cursor = 'grab';
});

// Initially position the containers in a circular way
moveContainers();
