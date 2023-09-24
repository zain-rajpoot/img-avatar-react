import React from 'react'
import UploadAvatar from './UploadAvatar'
import AudioRecord from './AudioRecord.js'

import './App.css';

function App() {
  return (
    <>
      <div className='crops'>
        <h1>Audio Record</h1>
        <AudioRecord />
        <h1>Crop Image</h1>
        <UploadAvatar />
      </div>
    </>
  );
}

export default App;
