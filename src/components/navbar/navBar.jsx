import React from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className={styles.navi}>
            <ul>
                <Link to="/"> 
                    <li>Store</li>
                </Link>
                <Link to={{pathname: "/orders"}}>
                  <li>Orders</li>
                </Link>
                
                
            </ul>
        </div>
    );

}

export default Navbar;
//<img src={ require(`../../data/img/shopping-cart.png`)} ></img>