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


// Add Table of Contents to posts

document.addEventListener("DOMContentLoaded", function () {
    // Get the table of contents container
    const tocContainer = document.getElementById('table_of_contents');

    // Get all headings inside the article tag, excluding h1
    const headings = document.querySelectorAll('article h2, article h3, article h4, article h5, article h6');

    // Initialize variables to keep track of the hierarchy
    let lastLevel = 1;  // We're starting from level 2 (h2) since we excluded h1
    let currentContainer = tocContainer;

    headings.forEach((heading) => {
        const level = parseInt(heading.tagName[1], 10);

        if (level > lastLevel) {
            // Create a new list for sub-items
            const newList = document.createElement('ul');
            currentContainer.appendChild(newList);
            currentContainer = newList;
        } else if (level < lastLevel) {
            // Go back up to the parent's parent container
            for (let i = 0; i < (lastLevel - level); i++) {
                currentContainer = currentContainer.parentElement;
            }
        }

        // Create a new list item and link for the heading
        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = `#${heading.id}`;
        newLink.textContent = heading.textContent;
        newItem.appendChild(newLink);
        currentContainer.appendChild(newItem);

        // Update the lastLevel to the current heading's level
        lastLevel = level;
    });
});