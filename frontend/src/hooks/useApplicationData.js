import {useReducer, useEffect} from 'react';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const reducer = (state, action) => {
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
    return {...state, photos: transformPhoto(action.payload, state.favorites)};
  case ACTIONS.SET_TOPIC_DATA:
    return {...state, topics: action.payload};
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
  topics: [],
  photos: transformPhoto([], []),
  hasFavorite: false,
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        console.log("Topics" ,data);
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data});
      });
  }, []);

  const loadPhotos = () => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Photos", data);
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data});
      });
  };

  const loadTopic = (topicId) => {
    if (topicId) {
      fetch(`/api/topics/photos/${topicId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data});
        });
    } else {
      loadPhotos();
    }
  };

  return {
    state: state,
    onPhotoSelect: (photo) => dispatch({type: ACTIONS.SELECT_PHOTO, payload: {photo: photo} }),
    updateToFavPhotoIds: (photoId) => dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {photoId: photoId}}),
    onLoadTopic: (topicId) => loadTopic(topicId),
    onClosePhotoDetailsModal: () => dispatch({type: ACTIONS.SELECT_PHOTO, payload: {photo: null} })
  };
}
