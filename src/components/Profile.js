import React, { Component } from 'react';
import invite from '../images/invite.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Switch from '@material-ui/core/Switch';
import {NavLink} from "react-router-dom";

function Profile() {
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, 
      [event.target.name]: event.target.checked });
  };
  return (
          <>
  <div class="profiledropdown">
  <img src={invite} class="probtn py-0 px-0" data-toggle="dropdown"> 
  </img>
  <div class="dropdown-menu" >
   <NavLink exact to ='/Purebakes' class="dropdown-item pl-4 text-primary shadow-none">Pure Bakes</NavLink>
  <Dropdown.Divider />
    <a class="dropdown-item" href="#">Store open
    <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'info checkbox' }}
      /></a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item text-secondary p-2 ml-3" href="#">Log out</a>
  </div>
</div>
        </>
      );
    
  }
export default Profile;
/*
<img src={invite} onClick={this.handleButtonClick}></img>
{this.state.open && (
  <div class="profiledropdown bg-wraning">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>
)}

                  <Dropdown >
    <Dropdown.Toggle style={{backgroundColor:'#fff',width:0,border:0,}}>
      <img src={invite}></img>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown1">
      <Dropdown.Item href="#">Add products through excel</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>*/