import React, { useState, useEffect } from 'react';
import styles from './reviewLaptop.module.css';
import { Navbar } from '..';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const CREATE_ORDER = gql`
    mutation addLaptop(
        $id: String!,
        $productName: String!,
        $price: String!) {
          productName
          id
          price
           
        }
    
`;

const ReviewLaptop = (props) => {
   const [ createOrder ] = useMutation(CREATE_ORDER);
   const [price, setPrice] = useState('');
   const [productName, setProductName] = useState('');
   const [id, setId] = useState('');
 
   /*createOrder({ variables: { productName, price, id } })*/
    const info = props.location.state.data;
  
   const hadleOrder = () => {
    }
    /*
    setPrice(info.price);
    setId(info.id);
    setProductName(info.productName);*/

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
                    <Link style={{textDecoration: 'none'}} to={{
                        pathname: "/orders",
                        state: {
                            info
                        }
                    }}>
                        <p onClick={() => console.log()} className={styles.laptop_link} >Buy now for {info.price}€</p>
                    </Link>
                   
                </div>
             
            </div>
                
        </div>
    
    );
}

export default ReviewLaptop;