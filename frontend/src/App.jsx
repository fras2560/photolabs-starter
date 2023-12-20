import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
const photos = [{...sampleDataForPhotoListItem, id: "1"}, {...sampleDataForPhotoListItem, id: "2"}, {...sampleDataForPhotoListItem, id: "3"}].map((photo) => {
  return (
    <PhotoListItem key={photo.id} {...photo} />
  );
});
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
