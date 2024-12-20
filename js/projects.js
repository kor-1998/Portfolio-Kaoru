// hamburger
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// Select all project items
const projectItems = document.querySelectorAll('.project-item');

// Loop through each project item
projectItems.forEach((item) => {
    const title = item.querySelector('.title'); // Find the title inside each item

    // Add mouseover event to fade in the title
    item.addEventListener('mouseover', () => {
        title.style.opacity = 1; // Make title visible
    });

    // Add mouseout event to fade out the title
    item.addEventListener('mouseout', () => {
        title.style.opacity = 0; // Hide title again
    });
});

const projectImages = document.querySelectorAll('.project-item .image');

projectImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.25)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});


