gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#container");
const titles = Array.from(container.querySelectorAll("h2"));
const paragraphs = Array.from(container.querySelectorAll("p"));
paragraphs.shift();
const manos = Array.from(container.querySelectorAll(".manoBox"));
const gradient = document.querySelector("#gradient");
const colors = ["rgb(252, 203, 104)", "rgb(252, 203, 104)", "rgb(203, 152, 102)", "rgb(203, 102, 51)", "rgb(101, 152, 102)", "rgb(102, 152, 51)", "rgb(51, 152, 152)", "rgb(52, 103, 103)"];
const colorsTriggers = [];

let divBox = document.createElement("div");
divBox.id = "colorsBox";
container.appendChild(divBox);

gradient.style.background = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}`;

for (let i = 0; i < (colors.length - 2); ++i){
  let div = document.createElement("div");
  div.classList.add("colorTrigger");
  divBox.appendChild(div);
  div.style.height = `${100/(colors.length - 2)}%`;
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

titles.forEach( title => {
  gsap.fromTo(title, { y: 150 }, { y: -60, 
    scrollTrigger: {
      scroller: container,
      trigger: title,
      start: 'top top+=95%',
      end: 'top top+=40%',
      scrub: 1
      },
    }
  );
});

paragraphs.forEach( ps => {
  gsap.from(ps, { y: 80, 
    scrollTrigger: {
      scroller: container,
      trigger: ps,
      start: 'top top+=95%',
      end: 'top top+=65%',
      scrub: 1
      },
    }
  );
});

manos.forEach(mano => {
  if (mano.querySelector(".manoBrillo") != null) {
    let manoBrillo = mano.querySelector(".manoBrillo");
    ScrollTrigger.create({
      scroller: container,
      trigger: mano,
      start: '22% top+=70%',
      onEnter: () => manoBrillo.classList.toggle('active'),
      onLeaveBack: () => manoBrillo.classList.toggle('active')
    });
  };
  
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
});

colorsTriggers.forEach((color, i) => {
  gsap.fromTo(gradient, { background: `linear-gradient(to bottom, ${colors[i]}, ${colors[i + 1]})` }, {
    background: `linear-gradient(to bottom, ${colors[i + 1]}, ${colors[i + 2]})`,
    scrollTrigger: {
      scroller: container,
      trigger: color,
      start: 'top top+=2px',
      end: 'bottom top',
      scrub: true
    }
  });
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
