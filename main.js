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
        scrollIntoView(link)
    })
})

//Home "Contact Me" btn click -> contact로 이동
const contactBtn = document.querySelector('.home__contact')
const contact = document.querySelector('#contact')

contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})


// 스크롤이 내려가면 Home이 투명해짐
// 1. 스크롤이 Home높이에서 내려갈수록 opacity 1 -> 0
// 2. window.scrollY의 값이 home의 높이랑 같을 경우 opacity = 0
//  : 1 - window.scrollY (400px) / homeHeight(800px) = 0.5 (opacity 값)
//  : 1 - window.scrollY (800px) / homeHeight(800px) = 0 (opacity 값)
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight 
})

// Arrow up button
const arrowUpBtn = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUpBtn.classList.add('show')
    } else {
        arrowUpBtn.classList.remove('show')
    }
})

arrowUpBtn.addEventListener('click', () => {
    scrollIntoView('#home')
})














// Function ScrollIntoView
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: "smooth"})
}