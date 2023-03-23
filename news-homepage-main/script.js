const openNavigationMenuIcons = document.querySelector('.open-navigation');
const closeNavigationMenuIcons = document.querySelector('.close-navigation');

const navigationMenu = document.getElementById('navigation-menu');

/* open the navigation menu */
openNavigationMenuIcons.addEventListener('click', () => {
    navigationMenu.classList.add('open');
})

closeNavigationMenuIcons.addEventListener('click', () => {
    navigationMenu.classList.remove('open');
})