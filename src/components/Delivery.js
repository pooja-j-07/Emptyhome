import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../images/logo.png';
function Delivery() {
  return (
    <>  
      <div class="container">
      <div class="Deliverycontain">
          <div class="row mt-4 mb-4">
            <div class="col text-center">
              <strong>HOW IT WORKS?</strong>
            </div>
          </div>

          <div class="row w-100">
            <div class="col w-100 ">
              <img id="routeimg" src={process.env.PUBLIC_URL + "/emtyhome.png"} alt="logoimage"></img>              </div>

            <div class="col">
          <div class="deliverycontents">
            <div class="row">
            <div class="col-4">
            <img src={logo} alt="routeimg"></img>
            </div>
            <div class="col-8">
            Enter a route name (area) <br/>ex. Jayanagar
            </div>
              </div>
          </div>
          <div class="deliverycontents">
          <div class="row">
            <div class="col-4">
            <img src={logo} alt="routeimg"></img>
            </div>
            <div class="col-8">
            Add your connected agents to an area
            </div>
              </div>
            </div>
          <div class="deliverycontents">
          <div class="row">
            <div class="col-4">
            <img src={logo} alt="routeimg"></img>
            </div>
            <div class="col-8">
            Your agents will be assigned orders according to routes
            </div>
              </div>
          </div>
        </div>   
      </div>

          <div class="row text-center mt-2 ">
            <div class="col">
            <NavLink to="/Newroute" className="btn btn-primary shadow-none">CREATE NEW ROUTE</NavLink>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
