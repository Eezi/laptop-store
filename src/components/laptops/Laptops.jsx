import React from 'react';
import styles from './Laptops.module.css';
import data from '../../data/data.json';
import asus from '../../data/img/asus-zenbook-flip-s.jpg';
import dell from '../../data/img/dell-xps-13.png';
import huawei from '../../data/img/huawei-matebook-pro.jpg';
import macbook from '../../data/img/macbook-pro-15.jpg';
import samsung from '../../data/img/samsung-notebook-9.jpg';


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
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>      
        </div>   
   
    );
}

export default Laptops;