import React from 'react';
import {BiRupee} from "react-icons/bi";
import {NavLink} from "react-router-dom";

function Productsitems({id,Name,Subname,image,Price,Stock,Edit,Delete}) {
   return (

      <div class="addproducts w-100">
          <div class="row w-100">
            <div class="col-1 w-100 text-center">
            <p>{id}</p>              
            </div>
            <div class="col-1 w-100 ">
            <img src={image} alt=""/>
            </div>
            <div class="col-3 w-100">
            <div class="namesub">
                    {Name}<br/>
                    {Subname}
            </div>
            </div>
            <div class="col-2 w-100 ">
            <p className="productprice">
                    <BiRupee/>
                    {Price}
            </p>
            </div>
            <div class="col-2 w-100">
            <p>{Stock}</p>
            </div>
            <div class="col-1 w-100 ">
            <div class="Productsitemlink">
                        <NavLink exact to ='/ProductEdit' class="productedit text-primary shadow-none">{Edit}</NavLink>
            </div>
            </div>
            <div class="col-2 w-100">
            <div class="Productsitemlink">
                        <NavLink exact to ='/ProductDelete' class="productdelete text-danger shadow-none">{Delete}</NavLink>
            </div>
            </div>

          </div>
      </div>

  );
}
export default Productsitems;
