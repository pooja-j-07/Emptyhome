import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import {NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import alarm from "../images/alarm.png";
import invite from "../images/invite.png";
import Profile from './Profile';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Logo from "./Logo";
const togglebar = <FontAwesomeIcon icon={faBars} />;

class Sidebar extends React.Component {
   
  render() {

    let classToggle=()=> {
      const navs = document.querySelectorAll('.Navbar__Items')
      
      navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    
    document.querySelector('.Navbar__Link-toggle')
      .addEventListener('click', classToggle);
    };
    return (
      <>
<div class="Navbar bg-light">
        <div class="Navbar__Lin Navbar__Link-brand"></div>
        <nav class="Navbar__Itemrow Navbar__Items--right">
        <ul class="navbar-nav  ml-auto flex-row">
  <li class="item">
              
    <div className="inviting">
        <span><img src={invite} /></span>
        <h6 class="invitetext">Invite</h6>
      </div>
  </li>
  <li class="item">
    <form class="input-icons">
      <div class="input-container">
        <SearchOutlinedIcon />
        <input type="text" class="control" placeholder="Search " name="search" />
      </div> </form> 
  </li>
  <li class="item">
    <img src={alarm} />
  </li>
  <li class="item">
    <Profile/>
  </li>
</ul> </nav>
        
<div class="Navbar__Link Navbar__Link-toggle bg">
          <i class="toggleicon" onClick={classToggle}>
            {togglebar}
          </i>
        </div>
        <nav class="Navbar__Items">
          <ul class="navbar-nav mr-auto flex-column vertical-nav">
            <Logo />
            <li class="nav-item ">
            <NavLink exact to ='/' activeClassName={"active"} className={"menustyle"}>Home</NavLink>
          </li>
          <li class="nav-item ">
            <NavLink to ='/Orders' activeClassName={"active"} className={"menustyle"}>Orders</NavLink>
          </li>
          <li class="nav-item ">
            <NavLink to ='/Products' activeClassName={"active"} className={"menustyle"}>Products</NavLink>
          </li>
          <li class="nav-item ">
            <NavLink to ='/Discounts' activeClassName={"active"} className={"menustyle"}>Discounts</NavLink>
          </li>
          <li class="nav-item ">
            <NavLink to ='/Delivery' activeClassName={"active"} className={"menustyle"}>Delivery</NavLink>
          </li>         
          <li class="nav-item ">
            <NavLink to ='/Customers' activeClassName={"active"} className={"menustyle"}>Customers</NavLink>
          </li>          
          <li class="nav-item ">
            <NavLink to ='/Operations' activeClassName={"active"} className={"menustyle"}>Operations</NavLink>
          </li>          
          <li class="nav-item ">
            <NavLink to ='/Reports' activeClassName={"active"} className={"menustyle"}>Reports</NavLink>
          </li>
          </ul>
        </nav>
      </div>
      </>
    );
  }
}
export default Sidebar;
