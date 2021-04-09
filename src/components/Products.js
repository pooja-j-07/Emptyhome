import React from 'react';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FilterIcon from '@material-ui/icons/Filter';
import {BiRupee} from "react-icons/bi";
import Popup from './Popup';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Select from "react-select";
import history from './history';
import axios from "axios";

class Products extends React.Component {
      constructor(props){
        super(props);
        this.state={deps:[], 
          popupshow:false,
          productname: "",
          productbrand: "",
          productdescription: "",
          hsncode: "",
          skuid: "",
          modelnumber: "",
          price: "",
          usageinstructions: ""
        };
        this.changeproductname = this.changeproductname.bind(this);
        this.changeproductbrand = this.changeproductbrand.bind(this);
        this.changeproductdescription = this.changeproductdescription.bind(this);
        this.changehsncode = this.changehsncode.bind(this);
        this.changeskuid = this.changeskuid.bind(this);
        this.changemodelnumber = this.changemodelnumber.bind(this);
        this.changeprice = this.changeprice.bind(this);
        this.changeusageinstructions = this.changeusageinstructions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
        changeproductname(event) {
          this.setState({
            productname: event.target.value,
          });
        }
        changeproductbrand(event) {
          this.setState({
            productbrand: event.target.value,
          });
        }
        changeproductdescription(event) {
          this.setState({
            productdescription: event.target.value,
          });
        }
        changehsncode(event) {
          this.setState({
            hsncode: event.target.value,
          });
        }
        changeskuid(event) {
          this.setState({
            skuid: event.target.value,
          });
        }
        changemodelnumber(event) {
          this.setState({
            modelnumber: event.target.value,
          });
        }
        changeprice(event) {
          this.setState({
            price: event.target.value,
          });
        }
        changeusageinstructions(event) {
          this.setState({
            usageinstructions: event.target.value,
          });
        }
        onSubmit(event) {
          event.preventDefault();
          const registered = {
            productname: this.state.productname,
            productbrand: this.state.productbrand,
            productdescription: this.state.productdescription,
            hsncode: this.state.hsncode,
            skuid: this.state.skuid,
            modelnumber: this.state.modelnumber,
            price: this.state.price,
            usageinstructions: this.state.usageinstructions,
          };
          axios
            .post("http://localhost:4000/app/products", registered)
            .then((response) => console.log(response.data));
      
          window.location = "/Home";
      }
  render() {
    const {deps}=this.state;
    let popupclose=()=>this.setState({popupshow:false});

    const colourOptions = [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" }
    ];

    const colourStyles = {
      control: (base) => ({
        ...base,
        border: '1px solid black',
        width: 275,
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid black',
        }
            })
  }
    return (
      <>
        <div class="container">
        <form onSubmit={this.onSubmit}>
        <div class="contain1 pl-3">
        <div class="contents">
        <h5 className="productheader">
        Add multiple products at once</h5>
            <p className="productscontent">
            Upload multiple products information at once through excel sheets.
            <br/>
            <a href="/Products">Download excel template</a>
            </p>
            <ButtonToolbar>
            <div class="group1button ml-auto">
            <Button variant="outline-primary shadow-none " onClick={()=> this.setState({popupshow:true})}>
              Upload multiple products
            </Button></div>
            <Popup show={this.state.popupshow} onHide={popupclose}/>
            </ButtonToolbar> 
      </div>
      </div>

      <div class="contain2">
        <text>OR</text>
        <h5>Add new product</h5>
      </div>
        <div class="contain3">
        <div class="contents">
        <div class="formgroup text-left p-3">
        <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeproductname}
                    value={this.state.productname}
                  /><br/><br/>
        <label>Product Brand</label> 
                  <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeproductbrand}
                    value={this.state.productbrand}
                  /><br/><br/>
        <label>Product Description</label>           
                  <textarea
                    rows="4"
                    cols="50"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeproductdescription}
                    value={this.state.productdescription}
                  ></textarea>
                                </div>
      </div>
        </div>
        <div class="contain4">
          <div class="contents mt-5">
            <p>Products images: can add upto 5 images</p>
            <br/>
            <FilterIcon fontSize="large" />
            <br/><br/>
            <a href="/Products">Drop files to upload</a>
            <br/><br/>
            <text>OR</text>
            <br/><br/>
            <a href="/Products">Upload images</a>
          </div>
        </div>         
        <div class="contain5">
          <div class="contents">
              <div class="formgroup1 text-left p-3  ">
                <div class="row">
                  <div class="col-6 ">
               <label>HSN Code</label><br/>
                  <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changehsncode}
                    value={this.state.hsncode}
                  /></div>
                  <div class="col-6">
                  <label>SKU ID</label> <br/>    
                  <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeskuid}
                    value={this.state.skuid}
                  /></div></div><br/> 
                  <div class="row">
                      <div class="col-6">
                  <label>Model number</label> <br/>
                  <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changemodelnumber}
                    value={this.state.modelnumber}
                  /></div>  
                  <div class="col-6">
                  <label>Price</label> <br/>    
                    <input
                    type="text"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeprice}
                    value={this.state.price}
                  /></div>  
                  </div>
                  <br/>
                  <div class="row">
                  <div class="col">
                  <label>Usage instructions</label> <br/>
                  <textarea
                    rows="4"
                    cols="50"
                    className="form-control shadow-none border-dark"
                    onChange={this.changeusageinstructions}
                    value={this.state.usageinstructions}
                  ></textarea>
                  </div>
              </div>
              </div>
          </div>
        </div>
        <div class="contain6">
          <div class="contents w-100">
            <div class="row">
              <div class="col-6 pl-4">
                  <Select className="selection"
                  placeholder="Select main category"
                  options={colourOptions}
                  styles={colourStyles}/>
              </div>
              <div class="col-6">
                <Select
                placeholder="Select sub category"
                options={colourOptions}
                styles={colourStyles}/>
            </div>
            </div>
          </div>
        </div>
                <br/>

              <div class="contain8">
              <div class="col col-6">
              <button className="btn w-100 btn-primary" onClick={() => history.push('/addproducttype')} value="submit">
                    <b>Add Product Type</b>
                  </button>              </div>
              <div class="col col-6">
                  <button className="btn w-100 btn-outline-primary" value="submit">
                    <b>Add more products</b>
                  </button></div>
                </div> 
  </form>
</div>
      </>
    );
  }
}
export default Products;
