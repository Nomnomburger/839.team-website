import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesloaded';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  tablet: {
    smooth: true
  }
});

imagesLoaded(".data-scroll-container", { background: true }, function () {
  scroll.update();
  console.log('images loaded');
  
});