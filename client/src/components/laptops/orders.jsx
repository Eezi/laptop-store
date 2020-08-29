import React, { useState } from 'react';
import styles from './orders.module.css';
import { Navbar } from '..';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_ORDERS } from '../../queries';
import { REMOVE_ORDER } from '../../queries';
import DeleteIcon from '@material-ui/icons/Delete';


const Orders = (props) => {
    const result = useQuery(ALL_ORDERS, {
        fetchPolicy: 'no-cache'
    });
    const [ deleteOrder ] = useMutation(REMOVE_ORDER, {
        refetchQueries:[ { query: ALL_ORDERS } ]
    });
    const [price, setPrice] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState([1]);
    const [lasku, setLasku] = useState(0);


    const poistaTilaus = async(value) => {
       
        let productName = value.productName;
        let price = value.price;
        deleteOrder({ variables: { productName, price } })

        setPrice(productName)
        setProductName(price)
   }



   const tilauksenLisäys = (value) => {
       console.log('value', value)
        let price = parseInt(value.price); 

        
        setQuantity(quantity.concat(price));
        console.log(quantity.length)
        setLasku(lasku + (price * 2))
        
        if(quantity.length > 1){
            setLasku(lasku + price)
            console.log('Lasku:', lasku)
        }
       
   }

   const tilauksenVähennys = (value) => {
    let price = parseInt(value.price);  
        if(quantity.length > 1){   
            setQuantity(quantity.slice(1));
        }
       
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

 
console.log('props', result) 

   if(result.data.allOrders.length){

    return (
        <div className={styles.koko}>
        <Navbar />
       
            <ol>
            {result.data.allOrders.map((order) => (
            <li key={order.id}>
                <div className={styles.order}>
                    <p> {order.productName} <span style={{float: 'right', marginRight: '35px'}}>Lasku: {lasku === 0 ? order.price : lasku}€</span>
                        <br />
                        {order.price}€
                       
                        
                            
                        <button className={styles.plus} key={order.price} value={order} onClick={() =>tilauksenLisäys(order)}>+</button>
                        <span style={{float: 'right', width: '30px', height: '30px', textAlign: 'center', marginRight: '20px', border: '1px solid #333'}}>{quantity.length }</span>
                        <button className={styles.minus} key={order.productName} value={order} onClick={() =>tilauksenVähennys(order)}>-</button>
                        <DeleteIcon key={order.id} value={order} onClick={() =>poistaTilaus(order)}
                         style={{
                             fontSize: '30px', 
                             float: 'right',
                             textAlign: 'center',
                             marginRight: '20px',
                             marginBlock: '10px'
                            }} 
                         />
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