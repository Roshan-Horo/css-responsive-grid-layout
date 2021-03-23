const nav = document.querySelector('.nav')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')

closeNav.addEventListener('click', () => {
    nav.classList.remove('navigation-open')
})

openNav.addEventListener('click', () => {
    nav.classList.add('navigation-open')
})