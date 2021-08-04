import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title'
import UploadForm from './components/UploadForm';
import PopUp from './components/PopUp';

function App() {
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <PopUp selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
