import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';

function App() {
  return (
    <div className="App" style={{height: "1600px", background: "#74b9ff"}}>
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;
