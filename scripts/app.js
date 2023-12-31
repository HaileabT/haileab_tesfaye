const menuBtn = document.getElementById("header-menu-btn");
const mobileNav = document.querySelector(".mobile-header-nav-wrapper");
let botStrip;

document.body.onclick = e => {
    e.stopPropagation();
    document.body.classList.toggle("light");
    document.querySelector(".page-main-header").classList.toggle("light");
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
