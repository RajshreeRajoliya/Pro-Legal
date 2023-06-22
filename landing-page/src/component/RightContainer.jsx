import React from "react";
import "./styles/RightContainer.css";
function RightContainer() {
  return (
    <div className="rightContainer">

    <div id="innerdiv">
      <h1 id="heading">Company Information</h1>

      <div id="firstBox">
        <div id="firstBoxfirstDiv">
          <div style={{background:"#FFFFFF"}}>
            <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>Operating company</p>
            


            <div style={{background:"#FFFFFF",fontWeight:"bold" ,fontSize:"17px"}}>Pro Legal Serve</div>
          </div>
          <div style={{background:"#FFFFFF"}}>
          <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>Company type</p>
          <div style={{background:"#FFFFFF",fontWeight:"bold" ,fontSize:"17px"}}>B2B</div>
          </div>
          <div style={{background:"#FFFFFF"}}>
          <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>Law firm or buisness name</p>
          <div style={{background:"#FFFFFF",fontWeight:"bold" ,fontSize:"17px"}}>Flash</div>
          </div>
        </div>
        <div id="firstBoxSecondDiv">
          <div style={{background:"#FFFFFF"}}>
            <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>Address 1</p>
            <div style={{background:"#FFFFFF",fontWeight:"bold" ,fontSize:"17px"}}>Company Address</div>
          </div>
        </div>
        <div id="firstBoxThirdDiv">
        <div style={{background:"#FFFFFF"}}>
          <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>State</p>
            <div>ProLegal Serve</div>
          </div>
          <div style={{background:"#FFFFFF"}}>
          <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>City</p>
            <div>B2B</div>
          </div>
          <div style={{background:"#FFFFFF"}}>
          <p style={{color:"#ADADAD" , background:"#FFFFFF"}}>Country</p>
            <div>Flash</div>
          </div>
        </div>
        <div id="firstBoxFourthDiv">
          <div>
            <p>Zip code</p>
            <div>ProLegal Serve</div>
          </div>
          <div>
            <p>Phone number</p>
            <div>B2B</div>
          </div>
        </div>
        <div class="SecondBoxThirdDiv">
          <span>
          -------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
      </div>
      <h1>Law firm information</h1>
      <div id="SecondBox">
        <div id="SecondBoxfirstDiv">
          <div>
            <p>Firm Speciality</p>
            <div>Family Law</div>
          </div>
          <div>
            <p>Case management </p>
            <div>Server Manager</div>
          </div>
        </div>
        <div id="SecondBoxsecondDiv">
          <div>
            <p>Account manager</p>
            <div>Account Manager</div>
          </div>
        </div>
        <div class="SecondBoxThirdDiv">
          <span>
            ------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
        <div id="SecondBoxFourthDiv">
          <h1> Company Notification Setting</h1>
        </div>
        <div id="SecondBoxFifthDiv">
          <div>
            <p>New user invited</p>
            <div>Email</div>
          </div>
          <div>
            <p>New user invited</p>
            <div>Email</div>
          </div>
          <div>
            <p>Law firm or Bussiness Name</p>
            <div>Flash</div>
          </div>
        </div>
        <div class="SecondBoxThirdDiv">
          <span>
            ------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RightContainer;