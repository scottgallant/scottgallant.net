let theme_toggler = document.querySelector('#theme_toggler');

// Add event listener to the theme toggler button
theme_toggler.addEventListener('click', function () {
    // transition effect only during toggle click
    document.body.setAttribute("style", "transition: all 0.2s ease;");
    // Toggle the dark class on the body element
    document.body.classList.toggle('dark');

    // swap the icons
    for (const child of theme_toggler.children) {
        child.classList.toggle("hidden");
    }

    // Checks if the body element has the dark class and set local storage theme appropriately
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('website_theme', 'dark');
    } else {
        localStorage.setItem('website_theme', 'default');
    }
});

// Retrieve the theme from local storage and set the body class
function retrieve_theme() {
    var theme = localStorage.getItem('website_theme');
    if (theme != null) {
        document.body.classList.remove('default', 'dark');
        document.body.classList.add(theme);
    }

    // show correct icon
    if (theme == 'dark') {
        document.querySelector('#sun').classList.add("hidden");
        document.querySelector('#moon').classList.remove("hidden");
    } else {
        document.querySelector('#sun').classList.remove("hidden");
        document.querySelector('#moon').classList.add("hidden");
    }
}
retrieve_theme();

// Add event listener to the window object to listen for storage event (so all open tabs will change)
window.addEventListener("storage", function () {
    retrieve_theme();
}, false);