import {useState , useReducer} from 'react';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

export default function useApplicationData() {
  // use a reducer since storing a list of photo ids
  const [favorites, toggleFavorite] = useReducer((favs, photoId) => {
    if (favs.indexOf(photoId) > -1) {
      return favs.filter((value) => value !== photoId);
    } else {
      const result = favs.slice();
      result.push(photoId);
      return result;
    }
  }, []);
  const [photo, showPhoto] = useState(null);

  // map the photos to include whether they have been favorited or not
  const computedPhotos = photos.map((photo) => {
    photo.favorite = favorites.includes(photo.id);
    photo['similar_photos'] = Object.values(photo.similar_photos).map((subPhoto) => {
      subPhoto.favorite = favorites.includes(subPhoto.id);
      return subPhoto;
    });
    return photo;
  });

  const computedPhoto = (photo) ? {...photo, favorite: favorites.includes(photo.id)} : photo;
  const closeModal = () => showPhoto(null);

  return {
    state: {
      favorites: favorites,
      photos: computedPhotos,
      selectedPhoto: computedPhoto,
      topics: topics,
      hasFavorite: favorites.length > 0
    },
    onPhotoSelect: (photoId) => showPhoto(photoId),
    updateToFavPhotoIds: (phototId) => toggleFavorite(phototId),
    onLoadTopic: () => null,
    onClosePhotoDetailsModa: () => closeModal()
  };
}
