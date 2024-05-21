import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
      <iframe
        className="full-screen-preview__frame"
        src="https://qodematrix.com/motion-art-for-elementor/"
        name="preview-frame"
        frameBorder="0"
        noResize="noresize"
        data-view="fullScreenPreview"
        allow="geolocation 'self'; autoplay 'self'"
        style={{ height: '887px', width: '100%' }}
      />
    </div>
  );
}

export default App;