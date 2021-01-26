import React from "react";

import SubmitButton from "./SubmitButton";

class Emptyhome extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="contain-text">
            <h5 className="header">Add a product to start selling</h5>
            <p className="descphara">
              Take the first step to launch
              <br /> your brand by adding a product
            </p>
          </div>

          <form className="formdata">
            <img
              src={process.env.PUBLIC_URL + "/emtyhome.png"}
              alt="logoimage"
            ></img>
            <br />
            <SubmitButton text="ADD PRODUCT" type="ADDPRODUCT" />
          </form>
        </div>
      </>
    );
  }
}

export default Emptyhome;
