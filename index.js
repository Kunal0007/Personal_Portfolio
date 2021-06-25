console.log("Hello");

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkClick() {
    const navMenu = document.getElementById('nav-menu');
    
    navMenu.classList.remove('show-menu');
}

navLink.forEach( n => n.addEventListener('click', linkClick) )

const skillContent = document.getElementsByClassName('skills__content');
const skillHeader = document.querySelectorAll('.skills__header');


function toggleSkills() {
    let itemClass = this.parentNode.className ;

    for (let i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skills__content skills__close';     
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }

}

skillHeader.forEach(element => {
    element.addEventListener('click', toggleSkills);
})


const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', )
})
