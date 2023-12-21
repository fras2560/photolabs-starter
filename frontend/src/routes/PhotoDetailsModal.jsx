import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const photo = {...props.photo, favorite: props.favorites.includes(props.photo.id)};
  const similarPhotos = Object.values(props.photo.similar_photos).map((photo) => {
    photo.favorite = props.favorites.includes(photo.id);
    return photo;
  });
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar ">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={() => props.closeModal()} />
        </button>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          favorite={photo.favorite}
          toggleFavorite={props.toggleFavorite}
          photoId={photo.id}
        ></PhotoFavButton>
        <img src={photo.urls.full} className="photo-details-modal__image " />
        <div className="photo-details-modal__photographer-details">
          <img src={props.photo.user.profile} className="photo-details-modal__photographer-profile"></img>
          <div className="photo-details-modal__photographer-info">
            {props.photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </div>
        </div>
        <h1 className="photo-details-modal__header">
          Similar Photo
        </h1>
        <PhotoList
          photos={similarPhotos}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          showPhoto={props.showPhoto}
        ></PhotoList>
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
