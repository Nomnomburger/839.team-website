import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  tablet: {
    smooth: true
  }
});

imagesLoaded("data-scroll-container", { background: true }, function () {
  LocomotiveScroll.update();
});