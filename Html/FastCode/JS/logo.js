document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer');
    const not = document.querySelector(".not");

    
    // Get all search bars
    const searchBars = document.querySelectorAll(".search_box input");
    
    // Function to show or hide images based on search input
    function filterImages() {
        let searchValue = Array.from(searchBars).map(searchBar => searchBar.value.trim().toLowerCase()).join(' ');
        let foundMatch = false;

        document.querySelectorAll('.hero_logo_img_box').forEach(image => {
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
    fetch('../JSON/logo.json')
        .then(response => response.json())
        .then(data => {
            data.logos.forEach(item => {
                const imageBox = document.createElement('div');
                imageBox.className = 'hero_logo_img_box';
                imageBox.dataset.name = item.imgAlt; // Use imgAlt as the searchable name

                imageBox.innerHTML = `
                    <img src="${item.imgSrc}" alt="${item.imgAlt}">
                    <h6>${item.imgAlt}</h6>
                    <a href="${item.downloadHref}" download="${item.downloadName}" class="logo_dowonload_btn">
                       <img src="../SVG/download.svg" alt=""  >
                    </a>
                `;

                imageContainer.appendChild(imageBox);
            });

            // Initially display all images
            filterImages();
        });

    // Add event listeners to filter images based on search input
    searchBars.forEach(input => {
        input.addEventListener('keyup', filterImages);
    });
});
