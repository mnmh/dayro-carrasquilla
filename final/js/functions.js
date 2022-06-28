$(function () {
  const $bl = $(".thumbs-block"),
    $th = $(".thumbs"),
    blW = $bl.outerWidth(),
    blSW = $bl.prop("scrollWidth"),
    wDiff = blSW / blW - 1, // widths difference ratio
    mPadd = 60, // Mousemove Padding
    damp = 50; // Mousemove response softness

  let posX = 0,
    mX2 = 0, // Modified mouse position
    mmAA = blW - mPadd * 2, // The mousemove available area
    mmAAr = blW / mmAA, // get available mousemove fidderence ratio
    itv = null;

  const anim = () => {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $th.css({
      transform: `translateX(${-posX * wDiff}px)`,
    });
  };

  $bl
    .on("mousemove", function (e) {
      const mouseX = e.pageX - $(this).prop("offsetLeft");
      mX2 = Math.min(Math.max(0, mouseX - mPadd), mmAA) * mmAAr;
    })
    .on("mouseenter", function (e) {
      itv = setInterval(anim, 10);
    })
    .on("mouseleave", function () {
      clearInterval(itv);
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const imageContainer = document.querySelector(".zoom");
imageContainer.onmousemove = (event) => {
  zoom(event);
};

const zoom = (e) => {
  let imageZoom = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetY = e.touches[0].pageY);
  x = (offsetX / imageZoom.offsetWidth) * 100;
  y = (offsetY / imageZoom.offsetHeight) * 100;
  imageZoom.style.backgroundPosition = x + "% " + y + "%";
};

const thumbs = document.getElementsByClassName("thumb");
for (var i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = function () {
    document.querySelector(".zoom img").src = this.src;
    document.querySelector(".zoom").style.backgroundImage =
      "url(" + this.src + ")";
  };
}

/** Gallery */

$(".photo").on("click", function () {
  $(".photo").toggleClass("away");
  $(this).removeClass("away").toggleClass("active");
});

/* toggle */

// Show an element
var show = function (elem) {
  // Get the natural height of the element
  var getHeight = function () {
    elem.style.display = "block"; // Make it visible
    var height = elem.scrollHeight + "px"; // Get it's height
    elem.style.display = ""; //  Hide it again
    return height;
  };

  var height = getHeight(); // Get the natural height
  elem.classList.add("is-visible"); // Make the element visible
  elem.style.height = height; // Update the max-height
};

// Hide an element
var hide = function (elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + "px";
  elem.classList.add("mask-hide");

  // Set the height back to 0
  window.setTimeout(function () {
    elem.style.height = "0";
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    elem.classList.remove("is-visible");
    elem.classList.remove("mask-hide");
  }, 2000);
};

// Toggle element visibility
var toggle = function (elem, timing) {
  // If the element is visible, hide it
  if (elem.classList.contains("is-visible")) {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);
  },
  false
);

/**Drag horizontal */

const slider = document.querySelector(".thumbs-block");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

gsap.timeline({
  defaults: { ease: "power1.inOut", duration: 2, force3D: false },
  scrollTrigger: {
    scroller: container,
    trigger: ".ubicacion",
    start: "top top",
    end: "top -400%",
    pin: true,
    scrub: 1,
  }
})
  .to(".map-colombia", { autoAlpha: 0, scale: 2, xPercent: 42, yPercent: -8, ease: "power3.out" })
  .from(".map-bolivar", { autoAlpha: 0, scale: 0.2, xPercent: -15, yPercent: 3 }, "<0.1")
  .from("h3:nth-child(2)", { autoAlpha: 0, duration: 1.5 }, "<")
  .to("h3:nth-child(1)", { autoAlpha: 0, duration: 1 }, "<0.5")
  .to(".map-bolivar", { autoAlpha: 0, scale: 2, xPercent: 10, yPercent: 40, delay: 1 })
  .from(".map-cartagena", { autoAlpha: 0, scale: 0.4, xPercent: -6, yPercent: -26 }, "<0.3")
  .from("h3:nth-child(3)", { autoAlpha: 0, duration: 1.5 }, "<")
  .to("h3:nth-child(2)", { autoAlpha: 0, duration: 1 }, "<0.5")
  .to(".map-cartagena", { autoAlpha: 0, scale: 2, xPercent: 18, yPercent: 57, delay: 1 })
  .from(".map-barrios", { autoAlpha: 0, scale: 0.4, xPercent: -8, yPercent: -34 }, "<0.3")
  .from("h3:nth-child(4)", { autoAlpha: 0, duration: 1.5 }, "<")
  .to("h3:nth-child(3)", { autoAlpha: 0, duration: 1 }, "<0.5")
  .to(".map-barrios", { autoAlpha: 0, scale: 1.5, xPercent: -15, yPercent: -32, delay: 1 })
  .from(".map-nelson", { autoAlpha: 0, scale: 0.4, xPercent: 18, yPercent: 18}, "<0.6")
  .to("h3:nth-child(4)", { top: 0, duration: 2.2 }, "<")
;