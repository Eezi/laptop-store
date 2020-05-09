import React from 'react';
import styles from './Laptops.module.css';


const Laptops = () =>  {
    return(
        <div className={styles.Laptop}>
            <div className={styles.cards_container}>
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require('../../data/img/macbook-pro-15.jpg')}></img>
                </div>
                    <h2 className={styles.card_name}>Apple Macbook Pro 2018</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> 15-inch Retina display</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> 6-core Intel i7, 8th generation</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>$3199</p>
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>
          
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require('../../data/img/huawei-matebook-pro.jpg')}></img>
                </div>
                    <h2 className={styles.card_name}>Huawei matebook X pro</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> 13.9-inch, 3K(3,000 x 2,2080)</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> Intel Core i7, 8th generation</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>$1449></p>
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require('../../data/img/dell-xps-13.png')}></img>
                </div>
                    <h2 className={styles.card_name}>Dell XPS 13</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> 13-inch Full HD</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> 6-core Intel i7, 8th generation</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>$3199</p>
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require('../../data/img/asus-zenbook-flip-s.jpg')}></img>
                </div>
                    <h2 className={styles.card_name}>Apple Macbook Pro 2018</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> 15-inch Retina display</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> 6-core Intel i7, 8th generation</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>$3199</p>
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card_hero}>
                    <img className={styles.card_img} src={ require('../../data/img/samsung-notebook-9.jpg')}></img>
                </div>
                    <h2 className={styles.card_name}>Apple Macbook Pro 2018</h2>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🖥</span> 15-inch Retina display</p>
                    <p className={styles.card_detail}><span className={styles.emoji_left}>🧮</span> 6-core Intel i7, 8th generation</p>
                <div className={styles.card_footer}>
                    <p className={styles.card_price}>$3199</p>
                    <p className={styles.card_link}>Check it out </p>
                </div>
            </div>
            
        </div>   
        </div>
    );
}

export default Laptops;