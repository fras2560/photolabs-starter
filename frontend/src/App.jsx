import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photo, showPhoto] = useState(null);

  const closeModal = () => showPhoto(null);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} showPhoto={showPhoto}></HomeRoute>
      {photo !== null && <PhotoDetailsModal photo={photo} closeModal={closeModal}></PhotoDetailsModal>}
    </div>
  );
};

export default App;
