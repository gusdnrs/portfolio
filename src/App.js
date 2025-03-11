import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const handleMouseEnter = () => {
    setSidebarExpanded(true);
  };

  const handleMouseLeave = () => {
    setSidebarExpanded(false);
  };

  return (
    <div className="App">
      <Sidebar 
        expanded={sidebarExpanded} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
      <MainContent 
        sidebarExpanded={sidebarExpanded} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;