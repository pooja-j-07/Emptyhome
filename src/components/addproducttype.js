import React from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import Form from "./Form";
class addproducttype extends React.Component {
    constructor(props){
      super(props);
      this.state={
        newtype: "",
        updatetype: "",
        showHidenew: false,
      };
      this.changenewtype = this.changenewtype.bind(this);
      this.changeupdatetype = this.changeupdatetype.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent() {
      this.setState({ showHidenew: !this.state.showHidenew });
      }
      changenewtype(event) {
        this.setState({
          newtype: event.target.value,
        });
      }
      changeupdatetype(event) {
        this.setState({
          updatetype: event.target.value,
        });
      }
      onSubmit(event) {
        event.preventDefault();
        const registered = {
          newtype: this.state.newtype,
          updatetype: this.state.updatetype,
        };
        axios
          .post("http://localhost:4000/app/products", registered)
          .then((response) => console.log(response.data));
    
        window.location = "/Products";
    }
    render() {
      const { showHidenew} = this.state;

  return (
    <>  
        <div class="container">
          
            <div class="contain7">
            <div class="contents w-100">
            <div class="addprcdtgrp text-left p-4 w-100">
            <h5 class="typeheader">Add product type</h5><br/>
            <label><input type="radio" name="optradio"/> Enter new Type name</label><br/>
                  <input
                    type="text"
                    className="form-control border-dark shadow-none"
                    onChange={this.changenewtype}
                    value={this.state.newtype}
                  /><br/><br/>
                  <h5 class="typeor text-center">OR</h5><br/>
                  <label><input type="radio" name="optradio"/> Update Product type by adding new attribute</label><br/>
                  <input
                    type="text"
                    className="form-control border-dark shadow-none"
                    onChange={this.changeupdatetype}
                    value={this.state.updatetype}
                  />
              </div>
              <Form/>
            </div>
            </div>
        </div>
    </>
  );
}
}
export default addproducttype;
