import React from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';

const Orders = (props) => {
    
   let item = props.location.state;
   let order;
   if(item = props.location.state) {
    order = item.info;
   }else {
       order = null;
   }
  
    return (
        <div className={styles.koko}>
            <Navbar />
            <div className={order ? styles.order : null}>
                   <p>
                    {order ? order.productName : null}<br />
                    {order ? order.price : null}€
                   </p>
            </div>
        </div>
    );

}

export default Orders;