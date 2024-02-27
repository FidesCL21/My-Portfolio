import React from 'react';

function StatusBar() {
  return (
    <footer className="status-bar bg-green-800 bg-opacity-50 font-bold p-4">
      <div className="flex justify-between">
        <div className="hp">
          HP 115/115
        </div>
        <div className="level">
          LEVEL 1
        </div>
        <div className="ap">
          AP 90/90
        </div>
      </div>
    </footer>
  );
}

export default StatusBar;
