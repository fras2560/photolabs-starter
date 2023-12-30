import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const selectTopic = () => {
    props.onLoadTopic(props.id);
  };
  return (
    <div className="topic-list__item">
      <span onClick={() => selectTopic()}>
        {props.title}
      </span>
    </div>
  );
};

export default TopicListItem;
