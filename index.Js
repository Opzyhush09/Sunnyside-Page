
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const toggleMenu = document.getElementById('toggle-menu');
    const mobileUl = document.getElementById('mobile-ul');

    hamburger.addEventListener('click', function () {
        if (toggleMenu.style.display === 'block') {
            toggleMenu.style.display = 'none';
        } else {
            toggleMenu.style.display = 'block';
        }
    });
});