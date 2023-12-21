import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => props.toggleFavorite(props.photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favorite}></FavIcon>
      </div>
    </div>
  );
};

export default PhotoFavButton;