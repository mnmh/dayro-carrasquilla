gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

let pinTitle = document.getElementById("pinBarrio");

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
  .to(".map-mundo", { autoAlpha: 0, scale: 2, xPercent: 35, yPercent: -10 }, "-=0.15")
  .from(".map-colombia", { autoAlpha: 0, scale: 0.6, xPercent: -10, yPercent: 2 }, "<0.2")
  
  .from("h3:nth-child(2)", { y: innerHeight }, "-=0.2")
  .to(".map-colombia", { autoAlpha: 0, scale: 2, xPercent: 10, yPercent: 40 }, "-=0.2")
  .from(".map-cartagena", { autoAlpha: 0, scale: 0.5, xPercent: -6, yPercent: -25 }, "<0.2")
  
  .from("h3:nth-child(3)", { y: innerHeight }, "-=0.2")
  .to(".map-cartagena", { autoAlpha: 0, scale: 3, xPercent: 24, yPercent: 70 }, "-=0.1")
  .from(".map-barrios", { autoAlpha: 0, scale: 0.6, xPercent: -6, yPercent: -20 }, "<0.1")

 .from("h3:nth-child(4)", { y: innerHeight }, "-=0.2")
  .to(".map-barrios", { autoAlpha: 0, scale: 3, xPercent: 24, yPercent: 70 }, "-=0.1")
  .from(".map-nelson", { autoAlpha: 0, scale: 0.6, xPercent: -6, yPercent: -20 }, "<0.1")

;
