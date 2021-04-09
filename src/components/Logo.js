import React from "react";

import logo from "../images/logo.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="logotitle ">
        <img src={logo} alt="logoimage"></img>
        <br />
        <strong className="titlename">TRUCOM</strong>
      </div>
    );
  }
}

export default Logo;
