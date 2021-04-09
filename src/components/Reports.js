import React, { useState, Fragment } from "react";
import { InputGroup,FormControl } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {RiDeleteBin2Line} from "react-icons/ri";


class Reports extends React.Component{
  state = {
    textValue: "",
    checkedOptionValue: "",
    options: [],
  };

  handleOptionAdd = () => {
    const { options, textValue } = this.state;
    this.setState({ textValue: "" });
    this.setState({
      options: [
        ...options,
        {
          label: textValue,
          value: textValue.toLowerCase().replace(" ", "-"),
        },
      ],
    });
  };

  handleRadioChange = (e) =>
    this.setState({ checkedOptionValue: e.target.value });

  render() {
    const { options, textValue, checkedOptionValue } = this.state;
    return (
      <div className="container text-center">
        <input
          type="text"
          value={textValue}
          onChange={(e) => this.setState({ textValue: e.target.value })}
        />
        <button onClick={this.handleOptionAdd}>Add</button>

        <div>
          {options.map((option) => (
            <div>
              <input
                type="radio"
                name="dynamic-radio"
                value={option.value}
                checked={checkedOptionValue === option.value}
                onChange={this.handleRadioChange}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Reports;
