import React, { useState, useEffect } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import * as firebase from 'firebase';
import 'firebase/firestore';

function useOrders() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
      const db = firebase.firestore();
    
         db.collection('orders').get().then((snapshot) => {
    
           const dbID = snapshot.docs.map((doc) => ({
              fId: doc.id,
              ...doc.data()
           }))
           setOrder(dbID);
           
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
    const db = firebase.firestore();
    let id = e.target.id;
    console.log(id);

    db.collection('orders').doc(id).delete().then(function(){
        console.log('Poisto onnistui!')
        
    }).catch(function(error) {
        console.log('Error tapahtui: ', error)
    })
    
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
                            <button id={order.fId} onClick={deleteOrder}>X</button>
                        </p>
                        
                    </div>
                </li>
                 )}
            </ol>
            
        </div>
    );

}

export default Orders;