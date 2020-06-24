import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './index.css';

//Images
import first from '../../img/carousel/1.png';
import second from '../../img/carousel/2.png';
import third from '../../img/carousel/3.png';
import fourth from '../../img/carousel/4.png'

const ImageCarousel = () => (
  <Carousel
    showArrows={false}
    showIndicators={true}
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    autoPlay={true}
    interval={5000}
    stopOnHover={false}
    swipeable={false}
    emulateTouch={false}
    transitionTime={1000}

    className="img-carousel h-full px-0 mx-0"
  >
    <div>
      <img src={first} alt="get-membership"/>
    </div>
    <div>
      <img src={second} alt="don't-miss"/>
    </div>
    <div>
      <img src={third} alt="introducing-app"/>
    </div>
    <div>
      <img src={fourth} alt="pricing-plan"/>
    </div>
  </Carousel>
);

export default ImageCarousel;
