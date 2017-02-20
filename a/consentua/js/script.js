// jQuery.extend(jQuery.easing,{
//     easeInOutExpo: function(x, t, b, c, d){
//         if (t==0) return b;
//         if (t==d) return b+c;
//         if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
//         return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
//     }
// });

//$(document).ready(function(){

	console.log("load");

	document.getElementById("toggle-menu").addEventListener("click", toggleMenu);

	function toggleMenu() {
		var nav = document.querySelector('nav') // Using a class instead, see note below.
		nav.classList.toggle('visible');
		console.log("ye");
		// var nav = document.getElementById("nav");
		// if (nav.classList) {
		//   nav.classList.toggle(visible);
		// } else {
		//   var classes = nav.visible.split(' ');
		//   var existingIndex = classes.indexOf(visible);

		//   if (existingIndex >= 0){
		//     classes.splice(existingIndex, 1);
		// } else{
		//     classes.push(visible);

		//   nav.visible = classes.join(' ');
		// }
		// }
	}


    // $('a[href=#]').click(function(e){
    //     e.preventDefault();
    //     $('nav').removeClass('visible');
    //     $('html,body').stop().animate({scrollTop: $('.'+$(this).data('scrollto')).offset().top-65 }, 700, 'easeInOutExpo', function(){});
    // });

    // $('.toggle-menu').click(function(){
    //     $('nav').toggleClass('visible');
    // });

    // if($(window).width() < 800){
    //     $('.pricing > div > div:nth-of-type(3)').insertAfter($('.pricing > div > div:nth-of-type(1)'));
    // }

//});

//Scroll to anchor links anim
var controller = new ScrollMagic.Controller();
	// build scene
	// var scrollToScene = new ScrollMagic.Scene({triggerElement: "a.anchor", duration: 200, triggerHook: "onLeave"})
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);

	// // change behaviour of controller to animate scroll instead of jump
	// controller.scrollTo(function (newpos) {
	// 	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	// });


	// // Change behavior of controller
	// // to animate scroll instead of jump
	// controller.scrollTo(function(target) {

	//   TweenMax.to(window, 0.5, {
	//     scrollTo : {
	//       y : target, // scroll position of the target along y axis
	//       autoKill : true // allows user to kill scroll action smoothly
	//     },
	//     ease : Cubic.easeInOut
	//   });
	// });

	// //  bind scroll to anchor links
	// // document.getElementById("toggle-menu").addEventListener("click", toggleMenu);
	// var anchorLinks = document.getElementsByClassName("anchor");
	// for (i = 0; i < anchorLinks.length; i++) {
 //    anchorLinks[i].addEventListener("click", scrollTo);
	// }
	// // document.getElementsByTagName('a').addEventListener("click", function (e) {

	// 	function scrollTo(e) {
	// 	var id = this.getAttribute("href");
	// 	console.log(id);
	// 	console.log(id.length);
	// 	if (id.length > 0) {
	// 		e.preventDefault();
	// 		// controller.scrollTo(id);

	//     // If supported by the browser we can also update the URL
	//     if (window.history && window.history.pushState) {
	//       history.pushState("", document.title, id);
	//     }
	// 	} else {
	// 		console.log("oops");
	// 	}

	// 	// controller.scrollTo("#contact");
	// 	// controller.scrollTo(id);
	// 	// var id = $(this).attr("href");
	// 	// if ($(id).length > 0) {
	// 		// e.preventDefault();

	// 	// 	// trigger scroll
	// 	// 	controller.scrollTo(id);

	// 	// 		// if supported by the browser we can even update the URL.
	// 	// 	if (window.history && window.history.pushState) {
	// 	// 		history.pushState("", document.title, id);
	// 	// 	}
	// 	// }
	// };
	// //  bind scroll to anchor links
	// $(document).on("click", "a[href^='#']", function (e) {
	// 	var id = $(this).attr("href");
	// 	if ($(id).length > 0) {
	// 		e.preventDefault();

	// 		// trigger scroll
	// 		controller.scrollTo(id);

	// 			// if supported by the browser we can even update the URL.
	// 		if (window.history && window.history.pushState) {
	// 			history.pushState("", document.title, id);
	// 		}
	// 	}
	// });