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

/* Click direct page */

var firstYear = document.getElementById("1980");
firstYear.addEventListener("click", function (e) {
  location.replace("/escalamiento-del-conflicto-80s.html");
});

var secondYear = document.getElementById("1988");
firstYear.addEventListener("click", function (e) {
  location.replace("/agravamiento-del-conflicto-90s.html");
});

var thirdYear = document.getElementById("1997");
firstYear.addEventListener("click", function (e) {
  location.replace("/el-gran-exodo-1997.html");
});

var thirdYear = document.getElementById("2005");
firstYear.addEventListener("click", function (e) {
  location.replace("/desplazamiento-2005.html");
});