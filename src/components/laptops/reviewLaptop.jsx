import React from 'react';
import styles from './reviewLaptop.module.css';
import data from '../../data/data.json';

const ReviewLaptop = (props) =>  {
    return(
        <div>
            <div className={styles.containerr}>
                <h1>The Laptop Store!</h1>
                <a href="/" className={styles.store}>Back to store</a>
                <div className={styles.laptopp}>
                    <p className={styles.laptop_pricee}>{props.price}€</p>
                    
                    <div className={styles.laptop_heroo}>
                    <img className={styles.card_img} src={ require(`../../data/img/dell-xps-13.png`) }></img>
                    </div>
               
                    <h2 className={styles.laptop_namee}>Apple Macbook Pro 2018</h2>
                    <div className={styles.laptop_detailss}>
                        <p><span className={styles.emoji_leftt}>🖥</span> 15-inch Retina display</p>
                        <p><span className={styles.emoji_leftt}>🧮</span> 6-core Intel i7, 8th generation</p>
                        <p><span className={styles.emoji_leftt}>💾</span> 1TB GB SSD of storage</p>
                        <p><span className={styles.emoji_leftt}>📦</span> 16GB of RAM</p>
                    </div>
                    <p className={styles.laptop_descriptionn}>
                        If you're after the latest and greatest laptop from Apple, we suggest you look into the 2018 model of
                        the 15-inch MacBook Pro with Touch Bar. The headline Touch Bar – a thin OLED display at the top of the
                        keyboard which can be used for any number of things, whether that be auto-suggesting words as you type
                        or offering Touch ID so you can log in with just your fingerprint – is of course included. It's
                        certainly retained Apple's sense of style, but it comes at a cost. This is a pricey machine, so you may
                        want to consider one of the Windows alternatives. But, if you're a steadfast Apple diehard, this is
                        definitely the best laptop for you!
                    </p>
                    <a href="/" className={styles.laptop_link}>Buy now for 3199€</a>
                </div>
            </div>
                
        </div>
    
    );
}

export default ReviewLaptop;