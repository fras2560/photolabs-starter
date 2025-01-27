import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        className="top-nav-bar__topic-list"
        topics={props.topics}
        onLoadTopic={props.onLoadTopic}
      ></TopicList>
      <FavBadge hasFavorite={props.hasFavorite}></FavBadge>
    </div>
  );
};

export default TopNavigation;