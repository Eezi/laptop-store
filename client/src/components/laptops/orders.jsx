import React, { useState } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_ORDERS } from '../../queries';
import { REMOVE_ORDER } from '../../queries';

const Orders = (props) => {
    const result = useQuery(ALL_ORDERS);
    const [ deleteOrder ] = useMutation(REMOVE_ORDER, {
        refetchQueries:[ { query: ALL_ORDERS } ]
    });
    const [price, setPrice] = useState('');
   const [productName, setProductName] = useState('');
  

    
    const poistaTilaus = async(value) => {
       
        let productName = value.productName;
        let price = value.price;
        deleteOrder({ variables: { productName, price } })

        setPrice(productName)
        setProductName(price)
        
   }

   if(result.loading) {  
    return <h2 style={{textAlign: "center"}}>Loading...</h2>
  }
  
  if(result.error) {
    return <h1 style={{textAlign: "center"}}>Something went wrong!</h1> 
  }
   console.log('pituus: ',result.data.allOrders.length )
   if(result.data.allOrders.length){

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
                        <button key={order.id} value={order} onClick={() =>poistaTilaus(order)}>X</button>
                    </p>
                   
                </div>
            </li>
             ))
               
            }
               
            </ol>
             
       
            
        </div>
    );
}
    return(
    <div style={{ height: '100vh' }} > 
        <Navbar /> 
        <h2 style={{ margin: '100px auto', textAlign: 'center'}}>Your shopping cart is empty!</h2>
    </div>
    )

}

export default Orders;