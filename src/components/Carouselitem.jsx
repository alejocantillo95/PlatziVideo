import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-plus-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carrousel_item">
    <img className="carrousel-item__img" src={cover} alt={title}>
    </img>
    <div className="carrousel-item__details">
      <div>
        <img className="botones" src={playIcon} alt="Play">
        </img>
        <img className="botones" src={plusIcon} alt="Plus">
        </img>
      </div>
      <p className="carrousel-item__details--title">{title}</p>
      <p className="carrousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;