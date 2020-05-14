import React from 'react';
import styles from './Laptops.module.css';
import { Route, Link } from 'react-router-dom';

const Laptops = (props) =>  {
    return(
        <div className={styles.cards_container}>
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require(`../../data/img/${props.img}`) }></img>
                </div>
                    <h2 className={styles.card_name}>{props.name}</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> {props.screen}</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> {props.cpu}</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>{props.price}€</p>
                    <Link to="/review">
                        <p className={styles.card_link}>Check it out </p>
                    </Link>
                </div>
            </div>      
        </div>   
   
    );
}

export default Laptops;