gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
});

ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});


gsap.to("body", {
    "--color": "#E3B267",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-1",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#CB9866",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-2",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#CB7F4D",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-3",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#CB6633",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-4",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#987F4D",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-5",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#659866",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-6",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#66984D",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-7",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#669833",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-8",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#4D9866",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-9",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#339898",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-10",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#348080",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-11",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});

gsap.to("body", {
    "--color": "#346767",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".section-12",
        scroller: ".container",
        scrub: true,
        start: 'top bottom',
        end: '+=100%'
    }
});



locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();