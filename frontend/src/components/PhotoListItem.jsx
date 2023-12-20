import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <div className="PhotoList">
      <img src={props.imageSource}></img>
      <img src={props.profile}></img>
      <h1>
        {props.username}
      </h1>
      <h2>
        {props.location.city}, {props.location.country}
      </h2>
    </div>
  );
};

export default PhotoListItem;
