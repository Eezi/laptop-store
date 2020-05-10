import React from 'react';
import styles from './Container.module.css';
import { Laptops } from '..';
import data from '../../data/data.json';



const Container = () =>  {
    return(
        <div className={styles.Container}>
            <h1>The Laptop Store</h1>
            <div className={styles.cards_container}>{data.map((el) => {
                return(<Laptops
                  key={el.id}
                  name={el.productName}
                  cpu={el.cpu}
                  image={el.image}
                  screen={el.screen}
                  price={el.price}
                  img={el.image}
                  />
                  
                );
            })}</div>
          
        </div>
    );
}

export default Container;