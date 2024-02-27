import React, { useState } from 'react';

const tabs = ['STATS', 'ABOUT', 'CONTACT', 'INVENTORY'];

function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <nav className="flex justify-center border-b-2 border-green-400 bg-black p-3 font-bold">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab text-green-400 px-5 py-2 ${
            activeTab === tab ? 'border-r-2 border-l-2 border-t-2 border-green-400' : ''
          }`}
          
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
