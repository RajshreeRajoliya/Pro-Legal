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
    if(page === 5){
      setPage(1);
    } else {
      setPage((prev)=>prev+1)
    }
    
  }
  useEffect(() => {
    fetch("http://localhost:3001/data") // Adjust the URL if you're using a different route in json-server
      .then((response) => response.json())
      .then((data) => setFeatures(data))
    
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
    
   
     {
      features.slice(page*1 - 1 , page *1).map((ele)=>{
        return <>
        <Navbar pic={ele.image} name={ele.name} />
     
       <Sidebar/>
       
     <RightContainer operating_company={ele.operating_company} company_type={ele.company_type}
      law_firm_or_business_name={ele.law_firm_or_business_name} address1={ele.address1} city={ele.city}
      state={ele.state} country={ele.country} zipcode={ele.zipcode} phone_number={ele.phone_number}
      firm_speciality={ele.firm_speciality} case_management={ele.case_management} account_manager={ele.account_manager}
      new_user_invited={ele.new_user_invited} new_user_added={ele.new_user_added} payment_method_change={ele.payment_method_change}
     nextBtn={nextPage}
     />
    
        </>
      })
     }
     
    
     
    </div>
  );
};

export default App;
