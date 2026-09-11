document.addEventListener('DOMContentLoaded', () => {
    const templateContainer = document.getElementById('templateContainer');
    const notFound = document.getElementById('notFound');

    // Function to filter templates based on search input
    function filterTemplates(searchValue) {
        let foundMatch = false;

        document.querySelectorAll('.template_container').forEach(container => {
            const dataName = container.querySelector('.template_container_left_side h2').textContent.toLowerCase();
            if (dataName.includes(searchValue)) {
                container.style.display = "flex";
                foundMatch = true;
            } else {
                container.style.display = "none";
            }
        });

        // Show or hide the "not found" message based on whether any matches were found
        notFound.style.display = foundMatch ? "none" : "block";
    }

    // Fetch template data and populate the container
    fetch('../JSON/template.json')
        .then(response => response.json())
        .then(data => {
            data.templates.forEach(template => {
                const templateBox = document.createElement('div');
                templateBox.className = 'template_container';
                templateBox.innerHTML = `
                   <div class="template_container_left_side">
                      <h2>${template.name}</h2>

                      <a href="${template.html}" download="${template.htmlName}">
                        <button>Html <img src="../SVG/download.svg" alt=""></button>
                      </a>

                      <a href="${template.css}" download="${template.cssName}">
                        <button>CSS <img src="../SVG/download.svg" alt=""></button>
                      </a>

                      <a href="${template.js}" download="${template.jsName}">
                        <button>Script <img src="../SVG/download.svg" alt=""></button>
                      </a>

                      <a href="${template.images}" download="${template.imagesName}">
                        <button class="template_hero_download_img">Images <img src="../SVG/download.svg" alt=""></button>
                      </a>
                    </div>

                    <div class="template_container_right_side">
                      <img src="${template.imageSrc}" />
                      <a href="${template.open}" target="_blank">
                        <button>Open in Browser <img src="../SVG/chrome.svg" alt=""></button>
                      </a>
                    </div>
                `;
                templateContainer.appendChild(templateBox);
            });

            // Initially display all templates
            filterTemplates('');
        });

    // Add event listeners to filter templates based on all search inputs
    document.querySelectorAll('.search_box input').forEach(input => {
        input.addEventListener('keyup', () => {
            const searchValue = input.value.trim().toLowerCase();
            filterTemplates(searchValue);
        });
    });
});
