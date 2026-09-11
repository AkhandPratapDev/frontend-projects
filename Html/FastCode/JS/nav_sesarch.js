document.addEventListener("DOMContentLoaded", () => {
  const searchInputs = document.querySelectorAll(".search_box input");
  const resultsContainer = document.getElementById("searchResults");
  const home = document.getElementById("home");
  const notFound = document.querySelector(".not");

  // Containers used for rendering
  const imageContainer = document.getElementById("backgrounds");
  const templateContainer = document.getElementById("templates");
  const logoContainer = document.getElementById("logos");

  const sectionsToToggle = [
    document.querySelector("main"),
    templateContainer,
    imageContainer,
    logoContainer,
    document.getElementById("footer"),
  ];

  let allItems = [];

  // Load all JSON data
  Promise.all([
    fetch("../JSON/template.json").then((res) => res.json()),
    fetch("../JSON/background.json").then((res) => res.json()),
    fetch("../JSON/logo.json").then((res) => res.json()),
  ])
    .then(([templateData, backgrounds, logoData]) => {
      allItems = [
        ...templateData.templates.map((item) => ({
          type: "template",
          name: item.name,
          imageSrc: item.imageSrc,
          html: item.html,
          htmlName: item.htmlName,
          css: item.css,
          cssName: item.cssName,
          js: item.js,
          jsName: item.jsName,
          images: item.images,
          imagesName: item.imagesName,
          open: item.open, // ✅ Add this to support "Open in Browser" button
        })),
        ...backgrounds.map((item) => ({
          type: "background",
          name: item.name,
          src: item.src,
        })),
        ...logoData.logos.map((item) => ({
          type: "logo",
          name: item.imgAlt,
          imgSrc: item.imgSrc,
          imgAlt: item.imgAlt,
          downloadHref: item.downloadHref,
          downloadName: item.downloadName,
        })),
      ];
    })

    .catch((err) => {
      console.error("Error loading JSON files:", err);
    });
  searchInputs.forEach((searchInput) => {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      notFound.style.display = "none";
      home.style.display = "block";

      sectionsToToggle.forEach((section) => {
        document.getElementById("footer").style.display = "block";
      });

      if (!query) {
        sectionsToToggle.forEach((section) => {
          if (section) section.style.display = "";
        });
        return;
      }

      const results = allItems.filter((item) =>
        query.split(" ").every((word) => item.name.toLowerCase().includes(word))
      );

      if (results.length === 0) {
        notFound.style.display = "block";
        home.style.display = "none";
        return;
      }

      const bgImageContainer = document.getElementById("bg_imageContainer");
      const tempImageContainer = document.getElementById("temp_imageContainer");
      const lgImageContainer = document.getElementById("lg_imageContainer");
      const searchResult = document.getElementById("recent_search");

      bgImageContainer.innerHTML = "";
      tempImageContainer.innerHTML = "";
      lgImageContainer.innerHTML = "";

      results.forEach((item) => {
        let div;

        if (item.type === "background") {
          bgImageContainer.style.display = "grid";
          searchResult.style.display = "block";
          div = document.createElement("div");
          div.className = "hero_background_image_box";
          div.dataset.name = item.name;
          div.innerHTML = `
          <img src="${item.src}" alt="${item.name}">
          <h6>${item.name}</h6>
          <a href="${item.src}" download="${item.name}" class="bg_img_dowonload_btn">
            <img src="../SVG/download.svg" alt="">
          </a>
        `;
          bgImageContainer.appendChild(div);
        } else if (item.type === "template") {
          tempImageContainer.style.display = "grid";
          searchResult.style.display = "block";
          div = document.createElement("div");
          div.className = "template_container";
          div.innerHTML = `
            <div class="template_container_left_side">
      <h2>${item.name}</h2>
      <a href="${item.html}" download="${item.htmlName}">
        <button>Html <img src="../SVG/downloadW.svg" alt=""></button>
      </a>
      <a href="${item.css}" download="${item.cssName}">
        <button>CSS <img src="../SVG/downloadW.svg" alt=""></button>
      </a>
      <a href="${item.js}" download="${item.jsName}">
        <button>Script <img src="../SVG/downloadW.svg" alt=""></button>
      </a>
      <a href="${item.images}" download="${item.imagesName}">
        <button class="template_hero_download_img">Images <img src="../SVG/downloadW.svg" alt=""></button>
      </a>
    </div>
    <div class="template_container_right_side">
      <img src="${item.imageSrc}" />
      <a href="${item.open}" target="_blank">
        <button>Open in Browser <img src="../SVG/chrome.svg" alt=""></button>
      </a>
    </div>
        `;
          tempImageContainer.appendChild(div);
        } else if (item.type === "logo") {
          lgImageContainer.style.display = "grid";
          searchResult.style.display = "block";
          div = document.createElement("div");
          div.className = "hero_logo_img_box";
          div.dataset.name = item.imgAlt;
          div.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.imgAlt}">
          <h6>${item.imgAlt}</h6>
          <a href="${item.downloadHref}" download="${item.downloadName}" class="logo_dowonload_btn">
            <img src="../SVG/download.svg" alt="">
          </a>
        `;
          lgImageContainer.appendChild(div);
        } else {
          console.warn("Unknown item type:", item.type);
        }
      });
    });
  });
});
