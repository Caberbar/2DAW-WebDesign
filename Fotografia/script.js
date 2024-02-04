/* NAV FIJO */

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navBack = document.getElementById("navback")
  const header = document.querySelector("header");

  const navList = document.querySelector('.nav-list');

  const btn_scrolltop = document.getElementById("btn_scrolltop");

  const navItems = document.querySelectorAll(".nav-item");

  btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

  // window.onscroll = () => {
  //   add_btn_scrolltop();
  // };

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
          // console.log(navItem)
        }
      }
    });
    if (window.scrollY > (header.clientHeight - 10)) {
      nav.classList.add("fixed-nav");
      navBack.classList.add("fixed-navBack");
      btn_scrolltop.style.zIndex = '99999';
      navList.style.top = '6.5vh';
      btn_scrolltop.classList.add("btn-scrolltop-on");
    } else {
      nav.classList.remove("fixed-nav");
      navBack.classList.remove("fixed-navBack");
      btn_scrolltop.style.zIndex = '-1';
      navList.style.top = '13.5vh';
      btn_scrolltop.classList.remove("btn-scrolltop-on");
    }
  });

  function markCurrentSection(navItem) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    navItem.classList.add("active");
  }

  /* GALERIA */

  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('close');

  gallery.addEventListener('click', function (event) {
    const targetElement = event.target.closest('.grid-item');
    if (targetElement && targetElement.dataset.imageUrl) {
      const imageUrl = targetElement.dataset.imageUrl;
      modalContent.style.backgroundImage = `url(${imageUrl})`;
      modal.style.display = 'flex';
      navBack.style.display = 'none';
    }

  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    navBack.style.display = 'block';
    modalContent.style.backgroundImage = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalContent.style.backgroundImage = 'none';
    }
  });

});

/*Menu*/
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-list").toggleClass("show");
    $(".bar:nth-child(1)").toggleClass(("rotate-45"));
    $(".bar:nth-child(2)").toggleClass(("hide"));
    $(".bar:nth-child(3)").toggleClass(("rotate45"));
  });
});

/* skills*/
var skills = {
  lc: 40,
  vc: 100,
  tr: 70,
  ps: 100,
  rs: 90,
};

$.each(skills, function (key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function () {
      $(".porcentaje").fadeIn();
    }
  );
});
