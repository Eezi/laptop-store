import React, { useState, useEffect } from 'react';
import styles from './reviewLaptop.module.css';
import { Navbar } from '..';
import { Link } from 'react-router-dom';
import { useLazyQuery, gql } from '@apollo/client';

const REVIEW_QUERY = gql`
    query laptopById($id: Int!) {
        findLaptop(id: $id) {
            productName
            id
            price
            cpu
            image
            ram
            storage
            screen
            description
        }
    }
`;

const ReviewLaptop = (props) => {
    const [getLaptop, result] = useLazyQuery(REVIEW_QUERY);
   const [laptop, setLaptop] = useState();
 
   
    const info = props.location.state.data;
   console.log('Propsit on: ', props)
   const hadleOrder = () => {
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