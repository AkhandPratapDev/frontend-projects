document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer');
    const not = document.querySelector(".not");

    // Get all search bars
    const searchBars = document.querySelectorAll(".search_box input");

    // Function to show or hide images based on search input
    function filterImages() {
        let searchValue = Array.from(searchBars).map(searchBar => searchBar.value.trim().toLowerCase()).join(' ');
        let foundMatch = false;

        document.querySelectorAll('.hero_background_image_box').forEach(image => {
            let dataName = image.dataset.name.toLowerCase();
            if (searchValue.split(' ').every(val => dataName.includes(val))) {
                image.style.display = "block";
                foundMatch = true;
            } else {
                image.style.display = "none";
            }
        });

        // Show or hide the "not found" image based on whether any matches were found
        not.style.display = foundMatch ? "none" : "block";
    }

    // Fetch image data and populate the gallery
    fetch('../JSON/background.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const imageBox = document.createElement('div');
                imageBox.className = 'hero_background_image_box';
                imageBox.dataset.name = item.name;

                imageBox.innerHTML = `
                    <img src="${item.src}" alt="${item.name}">
                    <h6>${item.name}</h6>
                    <a href="${item.src}" download="${item.name}" class="bg_img_dowonload_btn">
                          <img src="../SVG/download.svg" alt=""  >
                    </a>
                `;

                imageContainer.appendChild(imageBox);
            });

            // Initially display all images
            filterImages();
        });

    // Add event listeners to filter images based on search input from all search bars
    searchBars.forEach(searchBar => {
        searchBar.addEventListener('keyup', () => {
            filterImages();
        });
    });
});
