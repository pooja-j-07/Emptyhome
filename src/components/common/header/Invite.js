import "bootstrap/dist/css/bootstrap.css";
import React from "react";

import invite from "../../../assets/images/invite.png";

class Invite extends React.Component {
  render() {
    return (
      <div className="inviting">
        <span>
          <img src={invite} />
        </span>
        <h6>Invite</h6>
      </div>
    );
  }
}

export default Invite;
