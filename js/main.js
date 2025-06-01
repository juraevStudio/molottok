// // Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 2.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));
$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__zipp").css({
        "transform" : "translate(0px, " + st/3 + "px"
    });
});