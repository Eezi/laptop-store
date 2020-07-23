import React, { useState } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import { useQuery } from '@apollo/client';
import { ALL_ORDERS } from '../../queries';

const Orders = (props) => {
    const result = useQuery(ALL_ORDERS);

    const deleteOrder = (e) => {
    let id = e.target.id;
   }

   if(result.loading) {  
    return <h2 style={{textAlign: "center"}}>Loading...</h2>
  }
  
  if(result.error) {
    return <h1 style={{textAlign: "center"}}>Something went wrong!</h1> 
  }
   console.log(result.data.allOrders)
    return (
        <div className={styles.koko}>
            <Navbar /> 
            
            <ol>
            {result.data.allOrders.map((order) => (
            <li key={order.id}>
                <div className={styles.order}>
                    <p> {order.productName}
                        <br />
                        {order.price}
                        <button onClick={() => console.log(order.id)}>X</button>
                    </p>
                   
                </div>
            </li>
             ))
               
            }
               
            </ol>
            
        </div>
    );

}

export default Orders;