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

$(".photo").on("click", function() {
  $(".photo").toggleClass("away");
  $(this)
    .removeClass("away")
    .toggleClass("active");
});