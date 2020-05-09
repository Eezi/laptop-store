import React from 'react';
import styles from './Container.module.css';
import { Laptops } from '..';

const Container = () =>  {
    return(
        <div className={styles.Container}>
            <h1>The Laptop Store</h1>
            <Laptops />
        </div>
    );
}

export default Container;