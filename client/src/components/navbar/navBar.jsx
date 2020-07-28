import React from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Navbar = () => {

    return (
        <header className={styles.navi}>
             <div className={styles.logo}>Laptop Store</div>
            <ul>
               
                <Link to="/"> 
                    <li>Store</li>
                </Link>
                <Link to={{pathname: "/orders"}}>
                  <li><ShoppingCartOutlinedIcon style={{marginTop: '6px', fontSize: '30px'}} /></li>
                </Link>
                
                
            </ul>
        </header>
    );

}

export default Navbar;
//<img src={ require(`../../data/img/shopping-cart.png`)} ></img>