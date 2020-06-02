import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import * as firebase from 'firebase';
import 'firebase/firestore';

function useOrders() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
      const db = firebase.firestore();
            
            db.collection('orders')
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
    const IDS = [];
   
   let item = props.location.state;
   let order;
   if(item = props.location.state) {
    order = item.info;
   }else {
       order = null;
   }

   const db = firebase.firestore();
   db.collection('orders').get().then((snapshot) => {
    
    const dbID = snapshot.docs.map((doc) => {
         IDS.push(doc.id);
     })
     
 })
   
   const deleteOrder = () => {
    const db = firebase.firestore();

    db.collection('orders').doc().delete().then(function() {
        console.log('Poistaminen onnistui!');
        console.log(IDS[0])

    }).catch(function(error) {
        console.log('Error tapahtui poiston aikana ', error);
    });
 
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
                            <button id={order.IDS} onClick={deleteOrder}>X</button>
                        </p>
                        
                    </div>
                </li>
                 )}
            </ol>
            
        </div>
    );

}

export default Orders;