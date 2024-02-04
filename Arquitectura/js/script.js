/*--------------------------- NAV FIJO ---------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navBack = document.getElementById("navback");
    const header = document.querySelector("header");
    const navList = document.querySelector(".nav-list");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", function () {
        const currentPosition = window.scrollY + header.clientHeight;

        navItems.forEach((navItem) => {
            const targetId = navItem.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.clientHeight;

                if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
                    markCurrentSection(navItem);
                    console.log(navItem)
                }
            }
        });
        if (window.scrollY+80 > header.clientHeight) {
            nav.classList.add("fixed-nav");
            navBack.classList.add("fixed-navBack");
            navList.style.top = "8vh";
        } else {
            nav.classList.remove("fixed-nav");
            navBack.classList.remove("fixed-navBack");
            navList.style.top = "12vh";
        }
    });

    function markCurrentSection(navItem) {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });

        navItem.classList.add("active");
    }

    /*--------------------------- Boton Scroll Top ---------------------------*/
    const btn_scrolltop = document.getElementById("btn_scrolltop");

    btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    window.onscroll = () => {
        add_btn_scrolltop();
    };

    const add_btn_scrolltop = () => {
        if (window.scrollY < 300) {
            btn_scrolltop.classList.remove("btn-scrolltop-on");
        } else {
            btn_scrolltop.classList.add("btn-scrolltop-on");
        }
    };

    /*--------------------------- faq ---------------------------*/
    const items = document.querySelectorAll(".acordeon button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('expandido');
    
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('expandido', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('expandido', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

})

/*--------------------------- Menu ---------------------------*/
$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $(".nav-list").toggleClass("show");
        $(".bar:nth-child(1)").toggleClass(("rotate-45"));
        $(".bar:nth-child(2)").toggleClass(("hide"));
        $(".bar:nth-child(3)").toggleClass(("rotate45"));
    });
});

