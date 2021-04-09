import React from 'react';
import download from '../images/download.png';
import logo from '../images/logo.png';
import {MdEdit} from 'react-icons/md';
import Ratings from './Ratings';
import {NavLink} from "react-router-dom";

function Purebakes() {
  let iconStyles = { color: "blue", fontSize: "1.5em" };
  return (
    <>  
    <div class="container">
    <div class="purebakecontain1">
        <div class="contents">
            <div class="row">
                <div class="col-4">
                <img id="bakeimg" src={logo} alt="logoimage"></img>              
                </div>
                <div class="col-7 pt-3">
                    <div class="bakeheader">
                    <strong>Pure Bakes</strong><br/>
                    </div>
                    <div class="bakephnmail">
                    <p>8904875678</p>
                    <p>www.purebakes.in</p>
                    </div>
                    <div class="bakeaddress">
                    <p>Ground Floor, #30, Ground Floor, 1st Cross Rd, Sampangiram Nagar, Bengaluru, Karnataka 560003</p>
                    </div>
                </div>
                <div class="col-1">
                    <MdEdit style={iconStyles} />
                </div>
            </div>
            </div>
      </div>  

      <div class="purebakecontain1">
        <div class="contents">
            <div class="row">
                <div class="col-11">
                <div class="story">
                        <p>ABOUT</p>
                </div>
                </div>
                <div class="col-1">
                <span>
                    <MdEdit style={iconStyles} />
                </span>
                </div>
                </div>
                <div class="row ">
                    <div class="col">
                    <div class="story">
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
      </div>   


      <div class="purebakecontain1">
        <div class="contents">
            <div class="row">
                <div class="col-11">
                <div class="story">
                        <p>VIDEO LINKS</p>
                </div>
                </div>
                <div class="col-1">
                <span>
                    <MdEdit style={iconStyles} />
                </span>
                </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div  class="videocol">
                            <img src={logo} id="videoimg"></img> 
                            <p>Lorem Ipsum is sim..</p>             
                        </div>                         </div>
                    <div class="col">
                        <div  class="videocol">
                            <img src={logo} id="videoimg"></img> 
                            <p>Lorem Ipsum is sim..</p>             
                        </div>                         </div>
                    <div class="col">
                        <div  class="videocol">
                            <img src={logo} id="videoimg"></img> 
                            <p>Lorem Ipsum is sim..</p>             
                        </div>                         </div>
                    <div class="col">
                        <div  class="videocol">
                            <img src={logo} id="videoimg"></img> 
                            <p>Lorem Ipsum is sim..</p>             
                        </div>                         </div>
                </div>
            </div>
      </div> 


      <div class="purebakecontain1 mb-5">
        <div class="contents">
            <div class="row">
                <div class="col-8">
                <div class="story">
                        <p>BRAND REVIEWS</p>
                </div>
                </div>
                <div class="col-4 text-right">
                <NavLink exact to ='/Brandreviews' class="reviewtext pl-4 text-primary shadow-none">See all</NavLink>
                </div>
            </div>
                <div class="row">
                <div class="col pb-4">
                            <img src={logo} id="Brandimg"></img> 
                            Megha
                                <Ratings/>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="story">
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>

      </div>   
      </div>
      </div>   
    </>
  );
}

export default Purebakes;
