let header = document.getElementById("header");
let icon = document.querySelector(".bar-icon");

icon.addEventListener("click" ,()=>{
    header.classList.toggle("active");
})




// Function to check screen width and enable/disable AOS
function handleAOS() {
    // Get current screen width
    const screenWidth = window.innerWidth;

    // Initialize AOS with disable condition
    AOS.init({
        disable: function() {
            return screenWidth < 990; // Disable AOS if screen width is less than 990px
        }
    });
}

// Call the function initially
handleAOS();

// Re-check when the window is resized
window.addEventListener('resize', handleAOS);
