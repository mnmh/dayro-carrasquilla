gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

// let pinTitle = document.getElementById("pinBarrio");

// gsap.to(pinTitle, {
//   x: () => -(pinTitle.scrollWidth - document.documentElement.clientWidth) + "px",
//   ease: "power2.out",
//   scrollTrigger: {
//     start: "top top",
//     trigger: ".intro",
//     invalidateOnRefresh: true,
//     pin: ".intro",
//     scrub: 2,
//     anticipatePin: 1,
//     end: () => "+=" + pinTitle.offsetWidth
//   }
// })

const tlMundo = gsap.timeline({
  defaults: { ease: "power1.out" },
  scrollTrigger: {
    trigger: ".ubicacion",
    start: "top top",
    end: "bottom -600%",
    pin: true,
    scrub: 1.5
  }
})
  .from("h3:nth-child(1)", { y: innerHeight })
  .to(".map-colombia", { autoAlpha: 0, scale: 2, xPercent: 35, yPercent: -10 }, "-=0.15")
  .from(".map-bolivar", { autoAlpha: 0, scale: 0.6, xPercent: -10, yPercent: 2 }, "<0.2")
  .from("h3:nth-child(2)", { y: innerHeight }, "-=0.2")
  .to(".map-bolivar", { autoAlpha: 0, scale: 2, xPercent: 10, yPercent: 40 }, "-=0.2")
  .from(".map-cartagena", { autoAlpha: 0, scale: 0.5, xPercent: -6, yPercent: -25 }, "<0.2")
  .from("h3:nth-child(3)", { y: innerHeight }, "-=0.2")
  .to(".map-cartagena", { autoAlpha: 0, scale: 3, xPercent: 24, yPercent: 70 }, "-=0.1")
  .from(".map-barrios", { autoAlpha: 0, scale: 0.6, xPercent: -6, yPercent: -20 }, "<0.1")
  .from("h3:nth-child(4)", { y: innerHeight }, "-=0.2")
  .to(".map-barrios", { autoAlpha: 0, scale: 5, xPercent: -80, yPercent: -125, duration: 1.8 }, "-=0.2")
  .from(".map-nelson", { autoAlpha: 0, scale: 0.6, xPercent: 10, yPercent: 18, duration: 1.2 }, "<0.35")
  .to({}, { duration: 0.5 })
;

// let pinPazzz = document.getElementById("pinPazzz");
// gsap.to(pinPazzz, {
//   x: () => -(pinPazzz.scrollWidth - document.documentElement.clientWidth) + "px",
//   ease: "power2.inOut",
//   scrollTrigger: {
//     start: "center center",
//     trigger: pinPazzz,
//     invalidateOnRefresh: true,
//     pin: ".pazzz",
//     scrub: 2,
//     anticipatePin: 1,
//     end: () => "+=" + pinPazzz.offsetWidth
//   }
// })

Draggable.create('.anonimos img', {
  bounds: '.anonimos',
  type: 'x',
  onDragStart: function () {
    // console.log("drag start");
    gsap.to("img.anonimoImg", { scale: 0.96, filter: "grayscale(100%)" });
  },
  onDragEnd: function () {
    // console.log("drag ended");
    gsap.to("img.anonimoImg", { scale: 1, filter: "grayscale(0%)" });
  }
});

let revealContainers = document.querySelectorAll(".dientes");
revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let dientesTl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      toggleActions: "play none none reverse"
    }
  })
    .from(container, { scale: 0, duration: 1.5, ease: "power2.out" })
    .from(image, { scale: 2, duration: 3, ease: "power2.out" }, "-=1.5");
});

// document.querySelectorAll('.fragmentoP').forEach(fragmentoP => {
//   gsap.set(fragmentoP, { filter: "grayscale(80%)" });
// })


let fragmentoOrder = document.querySelector(".fragmentos");
for (let i = fragmentoOrder.children.length; i >= 0; i--) {
  fragmentoOrder.appendChild(fragmentoOrder.children[Math.random() * i | 0]);
}

document.querySelectorAll('.fragmento').forEach(fragmento => {
  gsap.set(fragmento, { yPercent: "random(-40, 30)", xPercent: "random(-50, 50)", rotation: "random(-4, 4)" });
  gsap.from(fragmento, {
    scrollTrigger: {
      trigger: fragmento,
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    autoAlpha: 0,
    yPercent: 40,
    xPercent: "random(-5, 5)",
    scale: 0.9,
    rotation: "random(-5, 5)",
    transformOrigin: "center center",
    duration: 1,
    ease: "power2.out"
  });
})


