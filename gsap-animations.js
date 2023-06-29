//DEFAULTS
ScrollTrigger.defaults({
    toggleActions: "restart none none none",
});

gsap.from(".intro-left", {
	x: -31,
	duration: .5,
	ease:Bounce.easeOut,
});
gsap.from(".intro-right", {
	x: 31,
	duration: .5,
	ease:Bounce.easeOut,
});
gsap.from(".intro-button", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	delay: 0.5,
});
gsap.from(".intro-logo", {
	display: "none",
	y: 150,
	duration: 1,
	delay: 0.5,
	ease: "power2.out",
});
gsap.to(".intro-button", {
	y:"+=5", 
	yoyo: true,
	repeat: 3,
	duration: .1,
	ease: "power2.inOut",
	delay: 2,
});

$(".intro-button").on("click",function(){ 
	gsap.to(".intro-button", {
		opacity: 0,
		display: "none",
		duration: 1,
		ease: "power2.out",
	});
	gsap.to(".intro-logo", {
		y: 150,
		duration: 1,
		ease: "circ.out",
	});
	gsap.to(".intro-left", {
		x: -2231,
		duration: 5,
		delay: .5,
		ease: "expo.out",
	});
	gsap.to(".intro-right", {
		x: 2231,
		duration: 5,
		delay: .5,
		ease: "expo.out",
	});
	gsap.to(".intro", {
		display: "none",
		duration: 0,
		delay: 1.5,
	});
	gsap.to(".main-row", {
		opacity: 1,
		duration: .2,
		delay: .5,
	});
	$('html, body').css({
		overflowY: "auto",
		height: "auto"
	});
  });
