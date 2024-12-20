var typed = new Typed(".text", {
    strings: ["Japanese", "a College student", "a Web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// hamburger
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// TASK 2: when user hovers on the article element scale up the image in the article
// define the article
    let services = document.querySelectorAll(".services-container");

    services.forEach( function(thisItem){
    thisItem.addEventListener ("mouseenter", function(){
    //scale up the image in thisItem
    thisItem.querySelector("img").classList.add("scaleUp");
    // change the background color and text when hoverd
    thisItem.classList.add("mouseEnter");
    // scale up the heading text and change its style
    thisItem.querySelector("h3").classList.add("mouseOver");
    thisItem.querySelector("p").classList.add("mouseOver");
    })

    thisItem. addEventListener ("mouseleave", function(){ 
    //remove scale on image
    thisItem.querySelector("img").classList.remove("scaleUp");
    // reset the container and text styles
    thisItem.classList.remove("mouseEnter");
    thisItem.querySelector("h3").classList.remove("mouseOver");
    thisItem.querySelector("p").classList.remove("mouseOver");
    })
 })

//  js scroll
document.addEventListener("DOMContentLoaded", () => {
    const target1 = document.getElementById("services-container-left");
    const target2 = document.getElementById("services-container-right");

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("service-visible-left");
            } else {
                entry.target.classList.remove("service-visible-left");
            }
        });
    }, {threshold: 0.1});

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("service-visible-right");
            } else {
                entry.target.classList.remove("service-visible-right");
            }
        });
    }, {threshold: 0.1});

    observer1.observe(target1);
    observer2.observe(target2);
});

document.addEventListener("DOMContentLoaded", () => {
    const target1 = document.getElementById("services-left");
    const target2 = document.getElementById("services-right");

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("service-visible-left");
            } else {
                entry.target.classList.remove("service-visible-left");
            }
        });
    }, {threshold: 0.1});

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("service-visible-right");
            } else {
                entry.target.classList.remove("service-visible-right");
            }
        });
    }, {threshold: 0.1});

    observer1.observe(target1);
    observer2.observe(target2);
});
