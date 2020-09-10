import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div class="carrousel_item">
    <img class="carrousel-item__img" src="https://images.pexels.com/photos/2796145/pexels-photo-2796145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Cassette">
    </img>
    <div class="carrousel-item__details">
      <div>
        <img class="botones" src="./images/icons8-play-64.png" alt="Play">
        </img>
        <img class="botones" src="./images/icons8-plus-64.png" alt="Plus">
        </img>
      </div>
      <p class="carrousel-item__details--title">Titulo Descriptivo</p>
      <p class="carrousel-item__details--subtitle">2020 16+ 114 min</p>
    </div>
  </div>
);

export default CarouselItem;