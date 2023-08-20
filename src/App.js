import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArmButton from './components/ArmButton'; // Make sure to use the correct path
import LandButton from './components/LandButton'; // Make sure to use the correct path
import TakeoffButton from './components/TakeoffButton'; // Make sure to use the correct path
import GPSCords from './components/GPSCords'; // Make sure to use the correct path


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <ArmButton /> {/* Use the ArmButton component here */}
         
         <TakeoffButton />
         <LandButton />
         <GPSCords />
      </header>
    </div>
  );
}

export default App;
