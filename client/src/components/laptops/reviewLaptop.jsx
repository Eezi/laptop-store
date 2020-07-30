import React, { useState } from 'react';
import styles from './reviewLaptop.module.css';
import { Navbar } from '..';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ORDER, ALL_ORDERS } from '../../queries';

const ReviewLaptop = (props) => {

   const result = useQuery(ALL_ORDERS);
   const [price, setPrice] = useState('');
   const [productName, setProductName] = useState('');
   const [extra, setExtra] = useState([]);
   const [ createOrder ] = useMutation(CREATE_ORDER, {
    refetchQueries:[ { query: ALL_ORDERS } ],
   
    });

   const info = props.location.state.data;
  
  
   const handleOrder = async() => {
        let productName = info.productName;
        let price = info.price

        if(!checkForDuplicates(mongoItemit)){
            for(let i of mongoItemit){
                if(i === productName){
                    alert('itemi on jo ostoskorissa')
                }else{
                    createOrder({ variables: { productName, price } })

                    setPrice(price);
                    setProductName(productName);
                }
            }
            
        } 
            
        
       /* console.log(mongoItemit)
       mongoItemit.filter(i => {
            console.log(mongoItemit)
            if(i === productName){
               // console.log(mongoItemit)
               // setExtra(extra.concat(i));
               console.log(mongoItemit)
                mongoItemit.pop(i);
              //  
            }else {
                createOrder({ variables: { productName, price } })
                setPrice(price);
                setProductName(productName);
            }
        })*/
      
    }
    if(result.loading) {  
        return <h2 style={{textAlign: "center"}}>Loading...</h2>
      }

   let mongoItemit = result.data.allOrders.map(i => i.productName)
  
   //Tarkistaa onko listassa samanimisiä itemejä
   const checkForDuplicates = (array) => {
    return new Set(array).size !== array.length
  }
    
    
    return(
        <div>
            <Navbar />
            
            <div className={styles.containerr}>
                
                <div className={styles.laptopp}>
                    <p className={styles.laptop_pricee}>{info.price}€</p>
                    
                    <div className={styles.laptop_heroo}>
                    <img className={styles.card_img} src={ require(`../../data/img/${info.image}`) }></img>
                    </div>
               
                    <h2 className={styles.laptop_namee}>{info.productName}</h2>
                    <div className={styles.laptop_detailss}>
                        <p><span className={styles.emoji_leftt}>🖥</span> {info.screen}</p>
                        <p><span className={styles.emoji_leftt}>🧮</span> {info.cpu}</p>
                        <p><span className={styles.emoji_leftt}>💾</span> {info.storage} of storage</p>
                        <p><span className={styles.emoji_leftt}>📦</span> {info.ram} of RAM</p>
                    </div>
                    <p className={styles.laptop_descriptionn}>
                       {info.description}
                    </p>
                    <Link style={{textDecoration: 'none'}} to="/orders" >
                        <p onClick={handleOrder} className={styles.laptop_link} >Buy now for {info.price}€</p>
                   </Link> 
                   
                </div>
             
            </div>
                
        </div>
    
    );
}

export default ReviewLaptop;