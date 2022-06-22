gsap.registerPlugin(ScrollTrigger);

const paragraphs = Array.from(document.querySelectorAll("#container p"));
paragraphs.shift(); 
const titles = Array.from(document.querySelectorAll("#container h2"));
const manos = Array.from(document.querySelectorAll(".manoBox"));
//const gradient = document.querySelectorAll(".gradient");

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true,
  smoothMobile: true,
  scrollFromAnywhere: true,
});

ScrollTrigger.scrollerProxy("#container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
});

/* gsap.to("html", {
  "--color1": "#98328e",
  "--color2": "#98328e",
  scrollTrigger: {
    markers: true,
    scroller: '#container',
    trigger: "#color1",
    pin: true,
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
}); */

manos.forEach(mano => {
  if (mano.querySelector(".manoBrillo") != null) {
    let manoBrillo = mano.querySelector(".manoBrillo");
    ScrollTrigger.create({
      //markers: true,
      scroller: '#container',
      trigger: mano,
      start: '22% top+=60%',
      onEnter: () => manoBrillo.classList.toggle('active'),
      onLeaveBack: () => manoBrillo.classList.toggle('active')
    });
  }
  
  gsap.fromTo(mano, { y: 200 }, { y: -250,
    scrollTrigger: {
      //markers: true,
      scroller: '#container',
      trigger: mano,
      start: 'top top+=95%',
      end: 'top top-=50%',
      scrub: 2
      },
    }
  );
});

titles.forEach( title => {
  gsap.fromTo(title, { y: 100 }, { y: -30, 
    scrollTrigger: {
      //markers: true,
      scroller: '#container',
      trigger: title,
      start: 'top top+=90%',
      end: 'top top+=30%',
      scrub: 1
      },
    }
  );
});

paragraphs.forEach( ps => {
  gsap.from(ps, { y: 80, 
    scrollTrigger: {
      //markers: true,
      scroller: '#container',
      trigger: ps,
      start: 'top top+=95%',
      end: 'top top+=65%',
      scrub: 1
      },
    }
  );
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
