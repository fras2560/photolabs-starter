import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        hasFavorite={props.hasFavorite}
        onLoadTopic={props.onLoadTopic}
      ></TopNavigation>
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        showPhoto={props.showPhoto}
      ></PhotoList>
    </div>
  );
};

export default HomeRoute;
