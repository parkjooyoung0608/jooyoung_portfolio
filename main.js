'use strict'

// Navbar
// 1. navbar의 height을 알아야한다.
// 2. navbar의 height만큼 document의 window가 scroll 되었을때 .navbar--dark를 추가
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});