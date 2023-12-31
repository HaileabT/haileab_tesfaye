const menuBtn = document.getElementById("header-menu-btn");
const mobileNav = document.querySelector(".mobile-header-nav-wrapper");


menuBtn.onclick = () =>{
    mobileNav.classList.toggle("mobile-toggle-visibility"); 
}