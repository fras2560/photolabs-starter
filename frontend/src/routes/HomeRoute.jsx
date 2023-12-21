import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics}></TopNavigation>
      <PhotoList photos={props.photos}></PhotoList>
    </div>
  );
};

export default HomeRoute;
