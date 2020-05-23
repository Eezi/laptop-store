import React from 'react';
import styles from './reviewLaptop.module.css';

const ReviewLaptop = (props) => {
    
   let item = props.location.state;
   let info = item.items[0];

    return(
        <div>
            <div className={styles.containerr}>
                <h1>The Overview Of Laptop!</h1>
                <a href="/" className={styles.store}>Back to store</a>
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
                    <a href="/" className={styles.laptop_link} >Buy now for {info.price}€</a>
                  
                   
                </div>
            </div>
                
        </div>
    
    );
}

export default ReviewLaptop;