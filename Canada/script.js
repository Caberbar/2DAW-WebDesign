/*Menu*/
$(document).ready(function () {
   $(".menu-toggle").click(function() {
      $(".nav-list").toggleClass("show");
      $(".bar:nth-child(1)").toggleClass(("rotate-45"));
      $(".bar:nth-child(2)").toggleClass(("hide"));
      $(".bar:nth-child(3)").toggleClass(("rotate45"));
   });
});

/*Boton Scroll Top*/
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}
  
/*Slider routes*/
function mostrarDia(route, id) {
    const dias = [`${route}Day1`, `${route}Day2`, `${route}Day3`, `${route}Day4`, `${route}Day5`];
    const botones = [`${route}Day1Button`, `${route}Day2Button`, `${route}Day3Button`, `${route}Day4Button`, `${route}Day5Button`];

    for (let i = 0; i < dias.length; i++) {
        const dia = document.getElementById(dias[i]);
        const boton = document.getElementById(botones[i]);

        if (id === dias[i]) {
            boton.classList.add("DayAct");
            dia.classList.remove("hide");
            dia.classList.add(`a${i + 1}`);
        } else {
            boton.classList.remove("DayAct");
            dia.classList.remove(`a${i + 1}`);
            dia.classList.add("hide");
        }
    }
}

document.getElementById("route1Day1Button").addEventListener("click", () => mostrarDia("route1", "route1Day1"));
document.getElementById("route1Day2Button").addEventListener("click", () => mostrarDia("route1", "route1Day2"));
document.getElementById("route1Day3Button").addEventListener("click", () => mostrarDia("route1", "route1Day3"));
document.getElementById("route1Day4Button").addEventListener("click", () => mostrarDia("route1", "route1Day4"));
document.getElementById("route1Day5Button").addEventListener("click", () => mostrarDia("route1", "route1Day5"));

document.getElementById("route2Day1Button").addEventListener("click", () => mostrarDia("route2", "route2Day1"));
document.getElementById("route2Day2Button").addEventListener("click", () => mostrarDia("route2", "route2Day2"));
document.getElementById("route2Day3Button").addEventListener("click", () => mostrarDia("route2", "route2Day3"));
document.getElementById("route2Day4Button").addEventListener("click", () => mostrarDia("route2", "route2Day4"));
document.getElementById("route2Day5Button").addEventListener("click", () => mostrarDia("route2", "route2Day5"));

document.getElementById("route3Day1Button").addEventListener("click", () => mostrarDia("route3", "route3Day1"));
document.getElementById("route3Day2Button").addEventListener("click", () => mostrarDia("route3", "route3Day2"));
document.getElementById("route3Day3Button").addEventListener("click", () => mostrarDia("route3", "route3Day3"));
document.getElementById("route3Day4Button").addEventListener("click", () => mostrarDia("route3", "route3Day4"));
document.getElementById("route3Day5Button").addEventListener("click", () => mostrarDia("route3", "route3Day5"));
