import React, { useReducer } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // use a reducer since storing a list of photo ids
  const [favorites, toggleFavorite] = useReducer((favs, photoId) => {
    if (favs.indexOf(photoId) > -1) {
      return favs.filter((value) => value !== photoId);
    } else {
      const result = favs.slice();
      result.push(photoId);
      return result;
    }
  }, []);

  // map the photos to include whether they have been favorited or not
  props.photos.map((photo) => {
    photo.favorite = favorites.includes(photo.id);
    return photo;
  });

  const hasFavorite = favorites.length > 0;
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} hasFavorite={hasFavorite}></TopNavigation>
      <PhotoList photos={props.photos} favorites={favorites} toggleFavorite={toggleFavorite}></PhotoList>
    </div>
  );
};

export default HomeRoute;
