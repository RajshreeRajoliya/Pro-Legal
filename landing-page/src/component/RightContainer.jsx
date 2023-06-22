import React from "react";
import "./styles/RightContainer.css";
import "../App.css"
function RightContainer(props) {
  return (
    <div className="rightContainer">

      <div id="innerdiv">
        <h1 id="heading">Company Information</h1>

        <div id="firstBox">
          <div id="firstBoxfirstDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>Operating company</p>



              <div style={{ fontWeight: "bold", fontSize: "17px" }}>{props.operating_company}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Company type</p>
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>{props.company_type}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Law firm or buisness name</p>
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>{props.law_firm_or_business_name}</div>
            </div>
          </div>
          <div id="firstBoxSecondDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>Address 1</p>
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>{props.address1}</div>
            </div>
          </div>
          <div id="firstBoxThirdDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>State</p>
              <div >{props.state}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>City</p>
              <div >{props.city}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Country</p>
              <div >{props.country}</div>
            </div>
          </div>
          <div id="firstBoxFourthDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>Zip code</p>
              <div >{props.zipcode}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Phone number</p>
              <div >{props.phone_number}</div>
            </div>
          </div>
          <div class="SecondBoxThirdDiv">
            <span style={{ color: "#ADADAD" }} >
              -------------------------------------------------------------------------------------------------------------------
            </span>
          </div>
        </div>
        <div className="thirdBlock"><h1>Law firm information</h1></div>
        <div id="SecondBox">
          <div id="SecondBoxfirstDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>Firm Speciality</p>
              <div >{props.firm_speciality}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Case management </p>
              <div >{props.case_management}</div>
            </div>
          </div>
          <div id="SecondBoxsecondDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>Account manager</p>
              <div >{props.account_manager}</div>
            </div>
          </div>
          <div class="SecondBoxThirdDiv">
            <span style={{ color: "#ADADAD" }}>
            -------------------------------------------------------------------------------------------------------------------
            </span>
          </div>
          <div id="lastBlock">
            <h1 > Company Notification Setting</h1>
          </div>
          <div id="SecondBoxFifthDiv">
            <div >
              <p style={{ color: "#ADADAD" }}>New user invited</p>
              <div >{props.new_user_invited}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>New user invited</p>
              <div >{props.new_user_added}</div>
            </div>
            <div >
              <p style={{ color: "#ADADAD" }}>Law firm or Bussiness Name</p>
              <div >{props.payment_method_change}</div>
            </div>
          </div>
          <div class="SecondBoxThirdDiv">
            <span style={{ color: "#ADADAD" }}>
            -------------------------------------------------------------------------------------------------------------------
            </span>
          </div>
        </div>
        <button id="btn" onClick={()=>props.nextBtn()}>Next</button>
      </div>


    </div>
  );
}

export default RightContainer;