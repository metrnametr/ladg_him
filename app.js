const scrollArrow = document.querySelector('.arrow');
const scrollHeight = document.querySelector('.slider-header').getBoundingClientRect().height;
const pageTitle = document.querySelector('.page-title');

const scrollHeaderHeight = document.querySelector('header').getBoundingClientRect().height;
scrollArrow.onclick = () => {
    window.scrollBy({ top: scrollHeight + scrollHeaderHeight, behavior: 'smooth' });
}

let transformX = 0;

window.addEventListener('scroll', (e) => {
    const scroll = document.documentElement.getBoundingClientRect().top;
    if (scroll < -300) {
        transformX = -1500;
        pageTitle.style.opacity = '.5';
        scrollArrow.style.opacity = '0';
    } else {
        transformX = 0;
        pageTitle.style.opacity = '1';
        scrollArrow.style.opacity = '1';
    }

    pageTitle.style.transform = `translateX(${transformX}px)`;    
})