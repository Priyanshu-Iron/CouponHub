// Dark Mode
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.classList.remove('lightMode');
    toggleSwitch.classList.add('darkMode');
}

toggleSwitch.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    toggleSwitch.classList.toggle('lightMode');
    toggleSwitch.classList.toggle('darkMode');

    // Save dark mode state
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Toggle User Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
