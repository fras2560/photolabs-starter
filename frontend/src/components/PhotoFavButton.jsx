import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="photo-list__fav-icon" onClick={() => setFavorite(!favorite)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}></FavIcon>
      </div>
    </div>
  );
};

export default PhotoFavButton;