import React, { useState } from "react";
import { InputGroup,FormControl } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {RiDeleteBin2Line} from "react-icons/ri";
import {IoIosAddCircleOutline} from 'react-icons/io';
import { IconContext } from "react-icons";


function Container() {
  const [inputList, setInputList] = useState([{ firstName: ""}]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "" }]);
  };
  return (
    <div className="container">
  {inputList.map((x, i) => {
    return ( 
      <div className="box">
                  <label className="labell w-100">Add attributes to the Type

          <InputGroup className="mb-3 w-100 border-dark mt-2">
          <input
          name="firstName" class="form-control border-dark shadow-none"
          value={x.firstName}
          onChange={e => handleInputChange(e, i)}
        />
    <InputGroup.Prepend>
          {inputList.length !== 1 && <button
            className="form-control border-dark" id="btnid"
            onClick={() => handleRemoveClick(i)}>            
            <IconContext.Provider value={{ color: "red", className: "global-class-name"}}>
            <div>
            <RiDeleteBin2Line size={28}/> 
            </div>
          </IconContext.Provider>
          </button>}
          {inputList.length - 1 === i && 
          <button id="btnid" className="form-control border-dark" onClick={handleAddClick}>
              <IconContext.Provider value={{ color: "blue", className: "global-class-name"}}>
                <div>
                <IoIosAddCircleOutline size={28}/>
                </div>
              </IconContext.Provider>
              </button>}
    </InputGroup.Prepend>
  </InputGroup>
  </label>
      </div>
    );
  })}
    <NavLink exact to ='/Products' class="dropdown-item bg-white text-center text-primary shadow-none">finish</NavLink>
</div>
  );
}

export default Container;