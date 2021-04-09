import React from 'react';
import {NavLink} from "react-router-dom";

import  Container from './Container';
  const Form = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div class="container w-100"> 
        <div class="frmgrp">    
        <input type="submit" class="btn btn-link shadow-none float-right w-100 text-right " value="next" onClick={onClick} />
        { showResults ? <Container/> : null }
        </div>  
      </div>
    )
  }
  
  export default Form;