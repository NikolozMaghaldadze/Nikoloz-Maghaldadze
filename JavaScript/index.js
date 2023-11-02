let barMenu = document.querySelector(".burger-bar");
let navigationBar = document.querySelector(".mobile-navigation");
let navBarStatus = false;
let mainSections = document.querySelectorAll("section");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
barMenu.addEventListener("click", function () {
  barMenu.classList.toggle("active");
  navigationBar.classList.toggle("active");
  navBarStatus = true;
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

/* droebit ar vexebi
  if(navBarStatus === true){
    mainSections.forEach((x) => {
        x.setAttribute("display","none");
    })

}
*/
