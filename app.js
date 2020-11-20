const tline = gsap.timeline({ defaults: { ease: "power1.out" } });

tline.to(".text", { y: "10%", duration: 0.5, stagger: 1 });
tline.to(".slider", { y: "-100%", duration: 1, delay: 0.25 });
tline.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tline.fromTO('nav', { opacity: 0 }, { opacity: 1, duration: 1 })