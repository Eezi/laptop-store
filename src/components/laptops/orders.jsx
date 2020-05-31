import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import * as firebase from 'firebase';
import 'firebase/firestore';

function useOrders() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('orders')
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(newOrder)

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
   const deleteOrder = (e) => {
   // firebase.collection('orders').doc(order.id).delete();
   
    //firebase.collection('orders').doc(id).delete();
   }
  
    return (
        <div className={styles.koko}>
            <Navbar />
            <ol>
                {fireOrder.map((order) => 

               <li key={order.id}>
                    <div className={fireOrder ? styles.order : null}>
                        <p>
                            {fireOrder ? order.productName : null}<br />
                            {fireOrder ? order.price : null}€
                            <button id={order.id} onClick={deleteOrder}>X</button>
                        </p>
                        
                    </div>
                </li>
                 )}
            </ol>
            
        </div>
    );

}

export default Orders;