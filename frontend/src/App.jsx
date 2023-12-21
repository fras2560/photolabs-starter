import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        {...state}
        showPhoto={onPhotoSelect}
        toggleFavorite={updateToFavPhotoIds}
      ></HomeRoute>
      {state.selectedPhoto !== null &&
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          toggleFavorite={updateToFavPhotoIds}
          favorites={state.favorites}></PhotoDetailsModal>
      }
    </div>
  );
};

export default App;
