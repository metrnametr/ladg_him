const scrollArrow = document.querySelector('.arrow');
const scrollHeight = document.querySelector('.slider-header').getBoundingClientRect().height;
const pageTitle = document.querySelector('.page-title');

const scrollHeaderHeight = document.querySelector('header').getBoundingClientRect().height;
scrollArrow.onclick = () => {
    window.scrollBy({ top: scrollHeight + scrollHeaderHeight, behavior: 'smooth' });
}

let transformX = 0;

const links = document.querySelectorAll('header nav li a');

function clearLink() {
    links.forEach(link => link.classList.remove('active'));
}

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


    const aboutUs = document.querySelector('.about-us').getBoundingClientRect()
    const aboutUsTop = aboutUs.top;
    const aboutUsHeight = aboutUs.height;

    const portfolio = document.querySelector('.portfolio').getBoundingClientRect()
    const portfolioTop = portfolio.top;
    const portfolioHeight = portfolio.height;


    if (aboutUsTop <= 0 && aboutUsTop >= 0 - aboutUsHeight) {
        links[0].classList.add('active');
    } else if (portfolioTop <= 0 && portfolioTop >= 0 - portfolioHeight) {
        links[1].classList.add('active');
    } else {
        clearLink();
    }

})