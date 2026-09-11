// Dark Theme 
// Function to toggle dark theme
function toggleDarkTheme() {
  document.body.classList.toggle("dark_theme");
}

// Add event listeners to all elements that should trigger the theme toggle
document.querySelectorAll(".dark-theme-toggle").forEach(button => {
  button.addEventListener("click", toggleDarkTheme);
});



// Select the side navigation and buttons
const sideNav = document.querySelector('.side_navbar');
const sideMenuBtn = document.querySelector('#side_menu_btn');
const closeSideNav = document.querySelector('#close_side_nav');

// Function to toggle the side navigation
function toggleSideNav() {
    sideNav.classList.toggle('active');
}

// Function to close the side navigation
function closeSideNavMenu() {
    sideNav.classList.remove('active');
}

// Event listener for the side menu button
sideMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the window
    toggleSideNav();
});

// Event listener for the close button
closeSideNav.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the window
    closeSideNavMenu();
});

// Event listener for clicks on the window
window.onclick = (e) => {
    // Check if the side navigation is active and the click is outside it
    if (sideNav.classList.contains('active') && !sideNav.contains(e.target) && e.target !== sideMenuBtn) {
        closeSideNavMenu();
    }
};



// Carousel Function

function createCarousel(className, interval) {
    let index = 0;
    const elements = document.getElementsByClassName(className);
    const total = elements.length;

    function updateCarousel() {
        for (let i = 0; i < total; i++) {
            elements[i].style.display = "none";
        }
        index = (index + 1) % total;
        elements[index].style.display = "block";
        setTimeout(updateCarousel, interval);
    }

    updateCarousel();
}

// Initialize Carousels
createCarousel("add_a_img", 2200);
createCarousel("add_b_img", 2000);
createCarousel("add_c_img", 2500);
createCarousel("add_d_img", 3400);
createCarousel("add_e_img", 3000);
createCarousel("add_f_img", 3500);

// Smooth Scroll for Ads
const scrollContainer = document.querySelector(".own_add");

// Clone count (number of items to clone at start/end)
const cloneCount = 4;

// Clone items for infinite loop and setup initial scroll
window.addEventListener("DOMContentLoaded", () => {
    const images = Array.from(scrollContainer.querySelectorAll("img"));

    // Clone first few items and append at end
    for (let i = 0; i < cloneCount; i++) {
        const clone = images[i].cloneNode(true);
        scrollContainer.appendChild(clone);
    }

    // Clone last few items and insert at beginning
    for (let i = images.length - cloneCount; i < images.length; i++) {
        const clone = images[i].cloneNode(true);
        scrollContainer.insertBefore(clone, scrollContainer.firstChild);
    }

    // Set initial scroll position to the first real item
    scrollContainer.scrollLeft = scrollContainer.offsetWidth;
});

// Wheel scroll with no smooth behavior (instant scroll) + prevent vertical scroll
// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollBehavior = "auto"; // prevent smooth on wheel for immediate response
// });

// Function to check scroll position and reset for infinite effect
function checkInfiniteScroll() {
    const scrollWidth = scrollContainer.scrollWidth;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.offsetWidth;

    // If scrolled to (or past) the clones at end, jump to start of real content
    if (scrollLeft + containerWidth >= scrollWidth - 10) {
        scrollContainer.style.scrollBehavior = "auto";  // disable smooth for instant jump
        scrollContainer.scrollLeft = containerWidth;
    }
    // If scrolled to (or past) clones at start, jump to end of real content
    else if (scrollLeft <= 0) {
        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollLeft = scrollWidth - 2 * containerWidth;
    }
}
scrollContainer.addEventListener("scroll", checkInfiniteScroll);

// Button scroll handlers with smooth scroll + check/reset after scrolling
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1468;

    // Wait for scroll animation to finish, then check/reset
    setTimeout(() => {
        checkInfiniteScroll();
        scrollContainer.style.scrollBehavior = "smooth"; // re-enable smooth scroll for next scroll
    }, 400);
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1468;

    setTimeout(() => {
        checkInfiniteScroll();
        scrollContainer.style.scrollBehavior = "smooth";
    }, 400);
});

