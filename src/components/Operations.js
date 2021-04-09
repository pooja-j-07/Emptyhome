import React, { useState } from "react";
import { InputGroup,FormControl } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {RiDeleteBin2Line} from "react-icons/ri";
import {IoIosAddCircleOutline} from 'react-icons/io';
import { IconContext } from "react-icons";

function Operations() {
  return (
    <> 
    <div class="container">
    <InputGroup className="mmm bg-dark">
          <input
          name="firstName" class="form-control"
placeholder="Enter First Name"
        />
    <InputGroup.Prepend>
          <button
            className="form-control" id="btnid">            
            <RiDeleteBin2Line/> 
          </button>
          <button id="btnid" className="form-control">
                <IoIosAddCircleOutline/>

              </button>
    </InputGroup.Prepend>
  </InputGroup></div> 
    </>
  );
}

export default Operations;
