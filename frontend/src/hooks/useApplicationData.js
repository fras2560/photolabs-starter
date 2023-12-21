import {useReducer} from 'react';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
  case ACTIONS.FAV_PHOTO_REMOVED: {
    let favorites = [...state.favorites];
    if (state.favorites.includes(action.payload.photoId)) {
      favorites = favorites.filter((favorite) => favorite !== action.payload.photoId);
    } else {
      favorites.push(action.payload.photoId);
    }
    const photos = transformPhoto(state.photos, favorites);
    return {...state, favorites: favorites, photos: photos, hasFavorite: favorites.length > 0};
  }
  case ACTIONS.SET_PHOTO_DATA:
    return {...state};
  case ACTIONS.SET_TOPIC_DATA:
    return {...state, topics: topics};
  case ACTIONS.SELECT_PHOTO:
    return {...state, selectedPhoto: action.payload.photo};
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {};
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const transformPhoto = (photos, favorites) => {
  return photos.map((photo) => {
    photo.favorite = favorites.includes(photo.id);
    photo['similar_photos'] = Object.values(photo.similar_photos).map((subPhoto) => {
      subPhoto.favorite = favorites.includes(subPhoto.id);
      return subPhoto;
    });
    return photo;
  });
};

const initialState = {
  favorites: [],
  selectedPhoto: null,
  topics: topics,
  photos: transformPhoto(photos, []),
  hasFavorite: false,
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state: state,
    onPhotoSelect: (photo) => dispatch({type: ACTIONS.SELECT_PHOTO, payload: {photo: photo} }),
    updateToFavPhotoIds: (photoId) => dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {photoId: photoId}}),
    onLoadTopic: () => null,
    onClosePhotoDetailsModal: () => dispatch({type: ACTIONS.SELECT_PHOTO, payload: {photo: null} })
  };
}
