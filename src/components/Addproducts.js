import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Productsitems from './Productsitems';
import cherrym from "../images/cherrym.png";
import multigrain from "../images/multigrain.png";
import Redvelvet from "../images/Redvelvet.png";
import valent from "../images/valent.png";
import walnut from "../images/walnut.png";

function Addproducts({id,Name,Subname,image,Price,Stock,Edit,Delete}) {
   return (
    <div>  
      <br/>
      <div class="dropdown">
    <Dropdown >
    <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:'#73a47'}}>ADD PRODUCTS</Dropdown.Toggle>
    <Dropdown.Menu className="dropdown1">
      <Dropdown.Item href="#">Add products through excel</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></div>
  <div class="container">
  <div class="Addproductcontain">
          <div class="contents w-100">
          <form>
              <br/>
              <div class="row w-100">
              <div class="col col-2 w-100">
              </div>
              <div class="col col-3 w-100">NAME
              </div>
              <div class="col col-2 w-100">PRICE
              </div>
              <div class="col col-2 w-100">IN STOCK
              </div>
              <div class="col col-2 w-100">
              </div>
              <div class="col col-1 w-100">
              </div>
              </div>
              <br/>
              <br/>
              <Productsitems id="1"
              image={Redvelvet} 
              Name="Red velvet cake"
              Subname="Pre-order"
              Price={130}
              Stock={1}
              Edit="Edit"
              Delete="Delete" >
              </Productsitems>
              <Productsitems id="2"
              image={multigrain} 
              Name="Multigrain bread"
              Subname="Ready to order"
              Price={150}
              Stock={0}
              Edit="Edit"
              Delete="Delete" >
              </Productsitems>
              <Productsitems id="3"
              image={walnut} 
              Name="walnut cake"
              Subname="Ready to order"
              Price={150}
              Stock={0}
              Edit="Edit"
              Delete="Delete" >
              </Productsitems>              
              <Productsitems id="4"
              image={cherrym} 
              Name="cherry muffin"
              Subname="Ready to order"
              Price={150}
              Stock={0}
              Edit="Edit"
              Delete="Delete" >
              </Productsitems>              
              <Productsitems id="5"
              image={valent} 
              Name="valentine cake"
              Subname="Ready to order"
              Price={150}
              Stock={0}
              Edit="Edit"
              Delete="Delete" >
              </Productsitems>
            </form>
          </div>
        </div>
  </div>
    
    </div>
  );
}


export default Addproducts;
