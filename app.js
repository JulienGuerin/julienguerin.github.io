const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 400) {
		header.style.backgroundColor = '#000091';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/***************************/
/******* Effect Nav *******/
/*************************/

const navLink = document.querySelectorAll('[data-li]');
const nav = document.querySelector('[data-nav]');

function mousePositionForBeforeElement(e, element) {
    let posX = e.offsetX;
    let posY = e.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
}

navLink.forEach(li =>{
    li.addEventListener('mouseenter', ()=>{

        li.classList.add('hovering');
        
        li.addEventListener('mousemove', (e) => {
            mousePositionForBeforeElement(e, li)
        });
    });

    li.addEventListener('mouseleave', ()=>{

        li.classList.remove('hovering');
    })
})

nav.addEventListener('mouseenter', ()=>{
    navLink.forEach(li =>{
        li.classList.remove('hoveringDisplay');
    })
})
nav.addEventListener('mouseleave', ()=>{
    navLink.forEach(li =>{
        li.classList.add('hoveringDisplay');
    })
})

/*******************************/
/******* End Effect Nav *******/
/*****************************/