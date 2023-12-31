const menuBtn = document.getElementById("header-menu-btn");
const mobileNav = document.querySelector(".mobile-header-nav-wrapper");
const projectLinks = document.querySelectorAll("a");
const offPageEl = document.querySelectorAll(".off-first-view");
const themeToggle = document.getElementById("theme-toggle-btn");
const leftNav = document.querySelector(".left-nav-wrapper");

let toggleLeftNav = () =>{
    if (window.scrollY >= window.innerHeight){
        leftNav.style.left = "calc(2 * 0.625rem)"; 
    }
    else{
        leftNav.style.left = "-100%";
    }
}

setInterval(toggleLeftNav, 100);
themeToggle.children[0].children[1].classList.add("hide-theme-text");
let isScrollingDown = false;
let scrollY = 0;
window.addEventListener('scroll', () => {
    if (scrollY < window.scrollY){
        isScrollingDown = true;
    }
    else if (scrollY > window.scrollY){
        isScrollingDown = false;
    }
    scrollY = window.scrollY;
});

let observeLogic = (entries, observera) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting && isScrollingDown){
            entry.target.classList.remove("slide-out");
                entry.target.classList.add("slide-in");
                observera.unobserve(entry.target);
        }
    })

}
const observer = new IntersectionObserver(observeLogic, {once: true, threshold: 0.5})



        offPageEl.forEach(element => observer.observe(element));



let botStrip;

projectLinks.forEach(el => {
    el.onclick = e =>{
        e.stopPropagation();
    }
})

themeToggle.onclick = e => {
    e.stopPropagation();
    document.body.classList.toggle("light");
    document.querySelector(".page-main-header").classList.toggle("light");
    themeToggle.children[0].children[0].classList.toggle("hide-theme-text");
    themeToggle.children[0].children[1].classList.toggle("hide-theme-text");
}

botStrip = document.querySelector(".stylish-strip-bottom");
    botStrip.children[0].classList.add("strip-out");
    botStrip.children[1].classList.add("strip-in");

menuBtn.onclick = e =>{
    e.stopPropagation();
    mobileNav.classList.toggle("mobile-toggle-visibility"); 
}

const addPtoStrip = () =>{
    botStrip = document.querySelector(".stylish-strip-bottom");
    console.log(botStrip.children.length);
    let stripPara = document.createElement("div");
    stripPara.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea amet soluta saepe mollitia numquam repudiandae aliquam similique modi minus ipsa non corrupti sequi sint nisi eaque possimus, aliquid et.";
    botStrip.appendChild(stripPara);

    botStrip.removeChild(botStrip.children[0]);
    botStrip = document.querySelector(".stylish-strip-bottom");
    botStrip.children[0].className = "strip-out";
    botStrip.children[1].className = "strip-in";
}

setInterval(addPtoStrip, 16000);
