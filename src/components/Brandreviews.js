import React from 'react';
import {NavLink} from "react-router-dom";
import Ratings from './Ratings';
import logo from '../images/logo.png';
import Switch from '@material-ui/core/Switch';

function Brandreviews() {
    const [state, setState] = React.useState({
        checkedB: true,
      });
      const handleChange = (event) => {
        setState({ ...state, 
          [event.target.name]: event.target.checked });
      };

  return (
    <>  
    <div class="container">
    <NavLink exact to ='/Purebakes' class="reviewtext text-secondary pl-3 shadow-none">Back</NavLink>
    <div class="purebakecontain1 mb-5">
        <div class="contents">
            <div class="row ml-1">
                <div class="col">
                <div class="story">
                        <p>BRAND REVIEWS</p>
                </div>
                </div>
            </div>
                <div class="row">
                <div class="col pb-4">
                            <img src={logo} id="Brandimg"></img> 
                            Megha
                                <Ratings/>
                </div>
            </div>
            <div class="row ml-1 mr-2">
                <div class="col">
                    <div class="story">
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row ml-1">
                <div class="col ">
                    Publish this review  
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="default"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'info checkbox' }}
                    />
                </div>
            </div>
      </div>  

              <div class="contents">
                <div class="row">
                <div class="col pb-4">
                            <img src={logo} id="Brandimg"></img> 
                            Megha
                                <Ratings/>
                </div>
            </div>
            <div class="row ml-1 mr-2">
                <div class="col">
                    <div class="story">
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row ml-1">
                <div class="col ">
                    Publish this review  
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="default"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'info checkbox' }}
                    />
                </div>
            </div>
      </div>   

      </div>
      </div>
    </>
  );
}
export default Brandreviews;
