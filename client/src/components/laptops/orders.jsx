import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';

const Orders = (props) => {
    const [order, setOrder] = useState([]);
   
    const data = [];
   
   const laptopData = props.location.state.info; 
    data.push(laptopData);
  
    useEffect(() => {
        setOrder({
            ...order,
            laptopData
        })
    }, [])
    
  

    const deleteOrder = (e) => {
    let id = e.target.id;
   }
   
    return (
        <div className={styles.koko}>
            <Navbar />
            
            <ol>

               <li>
                    <div className={order ? styles.order : null}>
                        <p>
                            {order ? order.productName : null}<br />
                            {order ? order.price : null}€
                            <button onClick={() => console.log(order)}>X</button>
                        </p>
                       
                    </div>
                </li>
                 
               
            </ol>
            
        </div>
    );

}

export default Orders;