console.log("hello main js");
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
console.log(nav);
console.log(hamburger);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navOpen');
    hamburger.classList.toggle('hamburgerOpen');
});

nav.addEventListener('click', () => {
    nav.classList.remove('navOpen');
    hamburger.classList.remove('hamburgerOpen');
})
