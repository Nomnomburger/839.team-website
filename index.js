import LocomotiveScroll from 'locomotive-scroll';

const imagesLoaded = require("imagesloaded");


let scrollContainer = document.querySelector("[data-scroll-container]");

var scroll;

scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  getSpeed: true,
  getDirection: true,
  tablet: {
    smooth: true
  }
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});