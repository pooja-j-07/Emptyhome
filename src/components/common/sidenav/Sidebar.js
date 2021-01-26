import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Link } from "react-router-dom";
import alarm from "../../../assets/images/alarm.png";
import Invite from "../header/Invite";
import Logo from "../header/Logo";
import Searchbox from "../header/Searchbox";
import { Sidebardata } from "./Sidebardata";

const togglebar = <FontAwesomeIcon icon={faBars} />;

function Sidebar() {
  const classToggle = () => {
    const navs = document.querySelectorAll(".Navbar__Items");
    navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
    document
      .querySelector(".Navbar__Link-toggle")
      .addEventListener("click", classToggle);
  };

  return (
    <>
      <div class="Navbar">
        <div class="Navbar__Lin Navbar__Link-brand"></div>
        <nav class="Navbar__Itemrow Navbar__Items--right">
          <div class="Navbar__Link">
            <Invite />
          </div>
          <div class="Navbar__Link">
            <Searchbox />
          </div>
          <div class="Navbar__Link">
            <img src={alarm} />
          </div>
          <div class="Navbar__Link">
            <MonetizationOnIcon />
          </div>
        </nav>
        <div class="Navbar__Link Navbar__Link-toggle">
          <i class="toggleicon" onClick={classToggle}>
            {togglebar}
          </i>
        </div>
        <nav class="Navbar__Items">
          <ul class="navbar-nav mr-auto flex-column vertical-nav">
            <Logo />
            {Sidebardata.map((val, key) => {
              return (
                <li key={key} className={val.cname}>
                  <Link to={val.path}>
                    <span>{val.title} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
