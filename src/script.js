

const pageContent = () => {

// document.getElementsByClassName(window).trigger('scroll');
  
  document.getElementsByClassName('.open-overlay').click(function() {

  })
  

document.getElementsByClassName(document).ready(function() {
  document.getElementsByClassName(".title").lettering();
  document.getElementsByClassName(".button").lettering();
});

// document.getElementsByClassName(document).ready(function() {
//   animation();
// }, 1000);

// document.getElementsByClassName('.button').click(function() {
//   animation();
// });


// function animation() {
//   var title1 = new TimelineMax();
//   title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
//   title1.staggerFromTo(".title", 1, 
//   {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
//   {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
//   title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 0})
// }

// jQuery(function($) {
  
//   // Function which adds the 'animated' class to any '.animatable' in view
//   var doAnimations = function() {
    
//     // Calc current offset and get all animatables
//     var offset = $(window).scrollTop() + $(window).height(),
//         $animatables = $('.animatable');
    
//     // Unbind scroll handler if we have no animatables
//     if ($animatables.length == 0) {
//       $(window).off('scroll', doAnimations);
//     }
    
//     // Check all animatables and animate them if necessary
// 		$animatables.each(function(i) {
//        var $animatable = $(this);
// 			if (($animatable.offset().top + $animatable.height() - 20) < offset ) {
//         $animatable.removeClass('animatable').addClass('animated');
// 			}
//     });

// 	};
  
//   // Hook doAnimations on scroll, and trigger a scroll
// 	$(window).on('scroll', doAnimations);


// });
}
export default pageContent;