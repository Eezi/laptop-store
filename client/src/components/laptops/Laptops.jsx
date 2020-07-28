import React, { useState } from 'react';
import styles from './Laptops.module.css';
import { Link } from 'react-router-dom';

const Laptops = ({ data }) =>  {
    const [items, setItems ] = useState([]); 
    
    const id = data.id;
   
    return(
           
           <div className={styles.cards_container}>

            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require(`../../data/img/${data.image}`) }></img>
                </div>
                    <h2 className={styles.card_name}>{data.productName}</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> {data.screen}</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> {data.cpu}</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price} >{data.price}€</p>

                    <Link to={{
                        pathname:`/review/${data.id}`,
                        state: {
                           data,
                           
                        }
                        }}>
                        <p className={styles.card_link} >Check it out </p>
                    </Link>

                </div>
            </div>
            
        </div> 
    );
}

export default Laptops;