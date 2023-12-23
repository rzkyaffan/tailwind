// fixed nav

window.onscroll = () =>{
    const nav = document.querySelector('header');

    const fixedNav = nav.offsetTop;

    if(window.pageYOffset > fixedNav){
        nav.classList.add('fixed-nav');
    } else{
        nav.classList.remove('fixed-nav');
    }
}

// menu hmburger
const btn = document.querySelector('#hamburger');

const navbarMenu = document.querySelector('#nav-menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    navbarMenu.classList.toggle('hidden')
})