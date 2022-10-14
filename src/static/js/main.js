const lateral_menu = document.querySelector('.lateral-menu');
const button_menu = document.querySelector('.menu');
const close = document.querySelector('.close');

button_menu.addEventListener('click', ()=>{
    lateral_menu.classList.add('lateral-menu-show');
});

function closeMenu(){
    lateral_menu.classList.remove('lateral-menu-show');
}

const circle = document.querySelector('.circulo');
const circleM = document.querySelector('.circulo-m');
const circleS = document.querySelector('.circulo-s');
const name_ = document.querySelector('.description h1');

document.addEventListener('mousemove', e => {
    const mouseX = e.pageX - 100;
    const mouseY = e.pageY - 100;

    const mouseXM = e.pageX -35;
    const mouseYM = e.pageY -35;

    const mouseXS = e.pageX -40;
    const mouseYS = e.pageY -40;

    circle.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0);`;
    circleM.style = `transform: translate3d(${mouseXM}px, ${mouseYM}px, 0);`;
    circleS.style = `transform: translate3d(${mouseXS}px, ${mouseYS}px, 0);`;

    name_.style = `transform: translate(${pageX}px, 0px);`;
});