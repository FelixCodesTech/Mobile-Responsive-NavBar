const navBurger = document.getElementById("navBurger");
const mobileNav = document.getElementById("mobileNav");

navBurger.onclick = () => {
    if (mobileNav.classList.contains("mobileNavHidden")){
        mobileNav.classList.remove("mobileNavHidden");
    } else {
        mobileNav.classList.add("mobileNavHidden");
    }
}