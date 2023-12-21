import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation></TopNavigation>
      <PhotoList></PhotoList>
    </div>
  );
};

export default HomeRoute;
