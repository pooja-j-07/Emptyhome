import "bootstrap/dist/css/bootstrap.css";
import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-block"
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
