import React, { useState } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_ORDERS } from '../../queries';
import { REMOVE_ORDER } from '../../queries';
import Icon from '@material-ui/core/Icon';


const Orders = (props) => {
    const result = useQuery(ALL_ORDERS);
    const [ deleteOrder ] = useMutation(REMOVE_ORDER, {
        refetchQueries:[ { query: ALL_ORDERS } ]
    });
    const [price, setPrice] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState([]);
    const [lasku, setLasku] = useState(0);

    const poistaTilaus = async(value) => {
       
        let productName = value.productName;
        let price = value.price;
        deleteOrder({ variables: { productName, price } })

        setPrice(productName)
        setProductName(price)
   }



   const tilauksenLisäys = (value) => {
        let price = parseInt(value.price); 
        setQuantity(quantity.concat(price));
        console.log(quantity.length)
       
        setLasku(lasku + price)
        
   }

   const tilauksenVähennys = (value) => {
    let price = parseInt(value.price);  
    
        setQuantity(quantity.slice(1));
        if(lasku > 0) {
            setLasku(lasku - price);
        }
}



   if(result.loading) {  
    return <h2 style={{textAlign: "center"}}>Loading...</h2>
  }
  
  if(result.error) {
    return <h1 style={{textAlign: "center"}}>Something went wrong!</h1> 
  }
  let itemit = result.data.allOrders.map(item => item.productName)

 
 

   if(result.data.allOrders.length){

    return (
        <div className={styles.koko}>
        <Navbar />
       
            <ol>
            {result.data.allOrders.map((order) => (
            <li key={order.id}>
                <div className={styles.order}>
                    <p> {order.productName} <span style={{float: 'right', marginRight: '20px'}}>Lasku: {lasku === 0 ? order.price : lasku}€</span>
                        <br />
                        {order.price}€
                       
                        
                            <span style={{float: 'right'}}>{quantity.length >= 0 ? quantity.length : '1'}</span>
                        <button key={order.price} value={order} onClick={() =>tilauksenLisäys(order)}>+</button>
                        <button key={order.productName} value={order} onClick={() =>tilauksenVähennys(order)}>-</button>
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