document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    document.getElementById("about-us-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('../About-us/about.html', contentDiv);
    });

    document.getElementById("home-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadPage('../The main page/index.html', contentDiv);
    });

    function loadPage(url, container) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((html) => {
                container.innerHTML = html;
            })
            .catch((error) => {
                console.error("Error loading page:", error);
                container.innerHTML = `<p>Error loading page content: ${error.message}</p>`;
            });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-navbar");
    const navbarLinks = document.querySelector(".navbar-links");

    toggleButton.addEventListener("click", function () {
        navbarLinks.classList.toggle("show");
    });
});


















