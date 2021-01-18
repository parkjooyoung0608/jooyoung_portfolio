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

// Navbar menu click시 해당 section으로 scrolling
// * data-link & scrollIntoVoew활용

const navbarMenu = document.querySelector('.navbar__menu')
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item')

navbarMenu.addEventListener('click', (e) => {
    const link = e.target.dataset.link
    if(link === null) {
        return
    }

    navbarMenuItem.forEach((item) => {
        const scrollTo = document.querySelector(link)
        scrollTo.scrollIntoView({behavior: "smooth"})
    })
})