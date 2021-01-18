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
const navbarMenuItem=document.querySelectorAll('.navbar__menu__item')
navbarMenu.addEventListener('click', (e) => {
    const link = e.target.dataset.link
    if(link === null) {
        return
    }

    navbarMenuItem.forEach((item) => {
        scrollIntoView(link)
    })
})

// Navbar toggle button (미디어쿼리)
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn')
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show')
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

// Work project filtering
// 1. categoryBtn click -> project filtering
// 2. category data-filter = project data-type 
const categories = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')
const categoryBtn = document.querySelectorAll('.category__btn')

categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter
    if(filter === null) {
        return
    }
    projectContainer.classList.add('anim-out')
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter==='*'|| filter === project.dataset.type) {
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        })
        projectContainer.classList.remove('anim-out')
    }, 300)

    // 선택되어진 selected없애기
    const active = document.querySelector('.category__btn.selected')    
    active.classList.remove('selected')
    // click한 target이 BUTTON이면 e.target 아니면 e.target.parentNode 
    //  selected 추가하기
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode
    target.classList.add('selected')

    

})













// Function ScrollIntoView
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: "smooth"})
}