gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#container");
const titles = Array.from(container.querySelectorAll("h2"));
const paragraphs = Array.from(container.querySelectorAll("p"));
paragraphs.shift();
const manos = Array.from(container.querySelectorAll(".manoBox"));
const gradient = document.querySelector("#gradient");
const colors = [
  'linear-gradient(180deg, rgb(252,203,104) 0%, rgb(252,203,104) 90%)',
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(252,203,104) 0%, rgb(203,152,102) 90%)`,
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(203,152,102) 0%, rgb(203,102,51) 90%)`,
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(203,102,51) 0%, rgb(101,152,102) 90%)`,
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(101,152,102) 0%, rgb(102,152,51) 90%)`,
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(102,152,51) 0%, rgb(51,152,152) 90%)`,
  `linear-gradient(${gsap.utils.random(110, 240)}deg, rgb(51,152,152) 0%, rgb(52,103,103) 90%)`
];
const colorsTriggers = [];

let divBox = document.createElement("div");
divBox.id = "colorsBox";
container.appendChild(divBox);

gradient.style.background = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}`;

for (let i = 0; i < (colors.length - 1); ++i){
  let div = document.createElement("div");
  div.classList.add("colorTrigger");
  divBox.appendChild(div);
  div.style.height = `${100/(colors.length - 1)}%`;
  colorsTriggers.push(div);
}

const locoScroll = new LocomotiveScroll({
  el: container,
  smooth: true,
  smoothMobile: true,
  scrollFromAnywhere: true,
});

ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight,
    };
  },
  pinType: container.style.transform ? "transform" : "fixed"
});

gsap.from(".ubicacion h3:nth-child(1)", { y: -400, 
  scrollTrigger: {
    scroller: container,
    trigger: ".ubicacion h3:nth-child(1)",
    start: 'bottom top+=98%',
    end: 'bottom top+=5%',
    scrub: 1
    },
  }
);

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

manos.forEach(mano => {
  gsap.to(mano, { y: -600,
    scrollTrigger: {
      scroller: container,
      trigger: mano,
      start: 'top top+=98%',
      end: 'top top',
      scrub: 2
      }
    }
  );
  if (mano.querySelector(".manoBrillo") != null) {
    let manoBrillo = mano.querySelector(".manoBrillo");
    ScrollTrigger.create({
      scroller: container,
      trigger: mano,
      markers: true,
      start: '4% top+=15%',
      onEnter: () => manoBrillo.classList.toggle('active'),
      onLeaveBack: () => manoBrillo.classList.toggle('active')
    });
  };
});

colorsTriggers.forEach((color, i) => {
  gsap.fromTo(gradient, { background: colors[i] }, { background: colors[i + 1],
    scrollTrigger: {
      scroller: container,
      trigger: color,
      start: 'top top+=2px',
      end: 'bottom top',
      scrub: true
    }
  });
});

titles.forEach( title => {
  gsap.fromTo(title, { y: 0 }, { y: -20, 
    scrollTrigger: {
      scroller: container,
      trigger: title,
      start: 'top top+=80%',
      end: 'top top+=20%',
      scrub: 1
      },
    }
  );
});

paragraphs.forEach( ps => {
  gsap.from(ps, { y: 10, 
    scrollTrigger: {
      scroller: container,
      trigger: ps,
      start: 'top top+=80%',
      end: 'top top+=20%',
      scrub: 1
      },
    }
  );
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
