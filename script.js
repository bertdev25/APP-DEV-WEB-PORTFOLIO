// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelector('div');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = se.coffsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forfetch(links => {
//                 links.classlist.remove(active);
//                 document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
//             })
//         }
//     })
// }

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Initial check on page load
    checkViewportWidth();

    // Toggle navbar visibility on menu icon click
    menuIcon.addEventListener('click', () => {
        toggleNavbar();
    });

    // Toggle navbar visibility based on viewport width
    window.addEventListener('resize', () => {
        checkViewportWidth();
    });

    function toggleNavbar() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    }

    function checkViewportWidth() {
        // Get current viewport width
        const viewportWidth = window.innerWidth;

        // Define a threshold for hiding the navbar (e.g., mobile breakpoint)
        const mobileBreakpoint = 768; // Adjust this value as needed

        // Toggle navbar visibility based on viewport width
        if (viewportWidth < mobileBreakpoint) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    }
});

