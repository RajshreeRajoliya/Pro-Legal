import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      {/* Rest of your app content goes here */}
    </div>
  );
};

export default App;
