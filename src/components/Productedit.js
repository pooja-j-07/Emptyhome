import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../images/logo.png';
import {BiRupee} from "react-icons/bi";
import {MdEdit} from 'react-icons/md';
import Ratings from './Ratings';
import asset35 from '../images/asset35.png';
import asset36 from '../images/asset36.png';
import asset37 from '../images/asset37.png';

function ProductEdit({id,Name,Subname,image,Price,Stock,Edit,Delete}) {
  let iconStyles = { color: "blue", fontSize: "1.5em" };
  return (
    <>  
    <div class="container">
      <div class="backlink">
      <NavLink exact to ='/Addproducts' class="productstext text-secondary pl-3 shadow-none">Back</NavLink>
      </div>
      <div class="pureeditcontain1">
        <div class="contents">
          <div class="row w-100">
            <div class="col-11 w-100 text-center">
              <div class="producteditheader">
                <strong>Red velvet cake</strong>
                <br/>
                <text>Pre-order</text><br/>
                <p><BiRupee/>120</p>
              </div>  
            </div>
            <div class="col-1 w-100 pr-1">
            <MdEdit style={iconStyles} />
            </div>
          </div>

          <div class="row ">
            <div class="col w-100">
              <div class="producteditimg">
                <img src={asset36}/>
                </div>
            </div>
            <div class="col w-100">
            <div class="producteditimg">
                <img src={asset37}/>                </div>

            </div>                
            <div class="col w-100">
            <div class="producteditimg">
                <img src={asset35}/>                </div>

            </div>                
            <div class="col w-100">
            <div class="producteditimg">
                <img src={asset36}/>                </div>

            </div>                           
            </div>
        </div>
      </div>

      <div class="pureeditcontain2">
        <div class="contents">
          <div class="row ">
            <div class="col-3 w-100">
            <div class="editproducttxt">
              <ul>
                <li class="story">
                  Brand
                </li>
                <li>
                  Loreum ipsum
                </li>
              </ul>
            </div>
            </div>

            <div class="col-3 w-100">
            <div class="editproducttxt">
              <ul>
              <li class="story">
                  HSN CODE
                </li>
                <li>
                  Loreum ipsum
                </li>
              </ul>
            </div>     
            </div>
       
            <div class="col-3 w-100">
            <div class="editproducttxt">
              <ul>
              <li class="story">
                  SKU ID
                </li>
                <li>
                  Loreum ipsum
                </li>
              </ul>
            </div> 
            </div>
            <div class="col-3 text-right  pr-4 w-100">
            <MdEdit style={iconStyles} />
            </div>
          </div>
        </div>
      </div>

      <div class="pureeditcontain2">
        <div class="contents">
        <div class="row ml-1">
                <div class="col-11">
                <div class="story">
                        <p>DESCRIPTION</p>
                </div>
                </div>
                <div class="col-1">
                <span>
                    <MdEdit style={iconStyles} />
                </span>
                </div>
                </div>
                <div class="row ml-1 mr-2">
                    <div class="col">
                    <div class="story">
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="row ml-1 mt-4 mr-2">
                    <div class="col"> 
                    <div class="story">
                        <p>
                          USAGE INSTRUCTIONS
                        </p>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer took a gallery of type and scrambled it to make a type specimen book. 
                        </p>
                    </div>
                    </div>
                </div>
            </div>
      </div>


      <div class="pureeditcontain2">
        <div class="contents">
      <div class="row ml-1">
                <div class="col">
                <div class="story">
                        <p>PRODUCT REVIEWS</p>
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
            </div>
    </div>
    </div>

    </>
  );
}
export default ProductEdit;
