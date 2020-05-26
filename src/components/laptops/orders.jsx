import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import firebase from '../../Config';

function useOrders() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        firebase
            .firebase()
            .collection('order')
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setOrder(newOrder);
            })
    
    }, [])
    
    return order;
}

const Orders = (props) => {
    const fireOrder = useOrders();
   
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
                   <button onClick={() => console.log(fireOrder)}></button>
            </div>
        </div>
    );

}

export default Orders;