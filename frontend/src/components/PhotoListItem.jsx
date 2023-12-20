import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton></PhotoFavButton>
      <img src={props.urls.regular} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={props.user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {props.name}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
