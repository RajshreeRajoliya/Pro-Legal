import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Main from './component/RightContainer';

const App= () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/features") // Adjust the URL if you're using a different route in json-server
      .then((response) => response.json())
      .then((data) => console.log(data))
    
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      <Main/>
      {/* Rest of your app content goes here */}
     
    </div>
  );
};

export default App;
