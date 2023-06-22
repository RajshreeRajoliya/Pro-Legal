import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Main from './component/RightContainer';
import RightContainer from './component/RightContainer';

const App= () => {
  const [features, setFeatures] = useState([]);
  const[page , setPage] = useState(1);
  const nextPage=()=>{
    setPage((prev)=>prev+1)
  }
  useEffect(() => {
    fetch("http://localhost:3001/data") // Adjust the URL if you're using a different route in json-server
      .then((response) => response.json())
      .then((data) => setFeatures(data))
    
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
     {/* <Navbar pic = {features[0].image} name = {features[0].name}/> */}
      
     {
      features.slice(page*1 - 1 , page *1).map((ele)=>{
        return <Navbar pic={ele.image} name={ele.name}/>
      })
     }
     <Sidebar/>
     <RightContainer/>
   <button onClick={nextPage}>NEXT</button>
     
    </div>
  );
};

export default App;
