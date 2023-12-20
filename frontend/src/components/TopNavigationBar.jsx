import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList className="top-nav-bar__topic-list"></TopicList>
    </div>
  );
};

export default TopNavigation;