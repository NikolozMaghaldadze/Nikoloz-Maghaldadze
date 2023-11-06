let barMenu = document.querySelector(".burger-bar");
let activeBarMenu = document.querySelector(".burger-bar active");
let navigationBar = document.querySelector(".mobile-navigation");
let mainSections = document.querySelectorAll("section");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let clickCount = 0;


barMenu.addEventListener("click", function () {
    barMenu.classList.toggle("active");
    navigationBar.classList.toggle("active");
  
    if (clickCount % 2 === 0) {
      mainSections.forEach((x) => {
        x.classList.toggle("none");
      });
    } else if (clickCount % 2 === 1) {
      mainSections.forEach((x) => {
        x.classList.toggle("none");
      });
    }
    clickCount++;
  });
  
  window.addEventListener("resize", function () {
    let w = window.innerWidth;
    {
      if (w > 450) {
        navigationBar.classList.remove("active");
        barMenu.classList.remove("active");
      }
    }
  });