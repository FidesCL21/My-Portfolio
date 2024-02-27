import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainDisplay from './components/Body/MainDisplay';
import StatusBar from './components/Footer/StatusBar';
import Header from './components/Header/Header';

function App () {
  return (
    <div className ="bg-black min-hscreen text-green-300 font-mono">
      <Navbar />
      <div className="mt-20">
      <Header />
      </div>
      <div className="mt-20">
      <MainDisplay />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;