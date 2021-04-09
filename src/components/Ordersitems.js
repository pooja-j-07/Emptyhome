import React from 'react';
import {BiRupee} from "react-icons/bi";

function Ordersitems({sl,orderid,date,amount,status,updatedstatus}) {
   return (
            
              <div class="ordersitems ">
                <div class="row w-100">
                <div class="col-1"> 
                {sl}
                </div>
                  <div class="col-3"> 
                  {orderid}
                  </div>
                  <div class="col-2">
                    {date}
                  </div>
                  <div class="col-2">       
                    <BiRupee/>
                    {amount}
                  </div>
                <div class="col-2">
                    <input type="radio"></input>
                     {status}
                </div>
                <div class="col-2">
                  <div class="orderstatuslink">
                    <a href="/" >{updatedstatus}</a></div> 
                </div>
                </div>
                </div>
  );
}
export default Ordersitems;
