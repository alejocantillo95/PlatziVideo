import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section class="carrousel">
    <div class="carrousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;