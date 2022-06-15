import SmoothScroll from "smooth-scroll";

new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutCubic',
  speed: 200,
  offset: 56,
});
