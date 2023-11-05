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
    mainSections.forEach(x => {
      x.classList.toggle("none");
    })
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

//s l i d e r

let slider = [
  {
    id:1,
    imageURL: "../Images/Photos/slider-image.png",
    headerText:"World news",
    topic:"Amazing places in America to visit.",
    description:"For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in."

  },
  {
    id:2,
    imageURL: "../Images/Photos/slider-image-2.png",
    headerText:"Places to visit",
    topic:"Amazing places in europe to visit.",
    description:"Experience Europe's charm! From Italy's art to France's cuisine, immerse in diverse cultures, stunning landscapes, and rich history. Your adventure awaits!"

  },
  {
    id:3,
    imageURL: "../Images/Photos/slider-image-3.png",
    headerText:"Georgia",
    topic:"Place full of love and beauty!",
    description:"Discover Georgia in the Caucasus! A blend of ancient history, breathtaking landscapes, warm hospitality, and delectable cuisine. Unveil a hidden gem!"

  },
]

let arrowRight = document.querySelector(".forward");
let arrowLeft = document.querySelector(".backward");
let section = document.getElementById("sliderSection");
let leftSide = document.querySelector(".left");
let sliderIndex = 0;

function createDiv(item){

  //create
  let div = document.createElement('div');
  let image = document.createElement('img');
  let headerElement = document.createElement('h1');
  let topic =document.createElement("h3") ;
  let description = document.createElement("p");
  let button = document.createElement("button");

  //set classNames
  div.classList.add('block');
  headerElement.classList.add('slider-header');
  topic.classList.add("slider-topic");
  button.classList.add("button");
  image.classList.add("image");
  //fill with information
  headerElement.innerText = item.headerText;
  topic.innerText = item.topic;
  description.innerText = item.description;
  button.innerText = "LEARN MORE";
  image.setAttribute('src', item.imageURL);
  //append elements
  div.appendChild(image);
  div.appendChild(headerElement);
  div.appendChild(topic);
  div.appendChild(button);
  div.appendChild(description);
  return div;
}

function setSlide(){
  leftSide.appendChild(createDiv(slider[sliderIndex]));
}

setSlide();