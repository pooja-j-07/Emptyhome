import React from 'react';
import Ordersitems from './Ordersitems';
function Orders({sl,orderid,date,amount,status,updatedstatus}) {
   return (
  
  <div class="container">
  <div class="ordercontain ">
          <div class="contents w-100">
              <br/>
              <div class="row w-100 ">
              <div class="col-1 w-100">SL
              </div>
              <div class="col-3 w-100">ORDER ID
              </div>
              <div class="col-2 w-100">DATE ORDERED
              </div>
              <div class="col-2 w-100">AMOUNT
              </div>
              <div class="col-2 w-100">STATUS
              </div>
              <div class="col-2 w-100">UPDATED STATUS
              </div>
              </div>
              <br/>
              <br/>
              <Ordersitems sl={1}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>

              <Ordersitems sl={2}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>
              <Ordersitems sl={3}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>              
              <Ordersitems sl={4}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>              
              <Ordersitems sl={5}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>              
              <Ordersitems sl={6}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>              
              <Ordersitems sl={7}
              orderid="ORDM110B5475"
              date="01-02-2020"
              amount={720}
              status=" Processing"
              updatedstatus="Mark as shipping">
              </Ordersitems>
          </div>
        </div>
  </div>
    
  );
}


export default Orders;
