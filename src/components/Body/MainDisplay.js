import React from 'react';
import figureImage from '../../assets/images/black-background-pip-boy-v3z1j9i2auvwgcz8.gif'

function MainDisplay() {
  return (
    <div className="main-display flex flex-col items-center justify-center p-4">
      {/* Placeholder for the figure */}
      <img src={figureImage} alt="Figure" className="mb-4" style={{ height: '300px', width: 'auto' }} />
      <div className="indicators text-center">
        <div>STIMPAK (0)</div>
        <div>RADAWAY (0)</div>
      </div>
    </div>
  );
}

export default MainDisplay;
