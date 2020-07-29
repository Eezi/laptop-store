import React from 'react';
import styles from './navBar.module.css';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Navbar = () => {

    return (
        <header className={styles.navi}>
             <div className={styles.logo}>Laptop Store</div>
            <div className={styles.nav}>
               <ul>
                <Link to="/"> 
                    <li style={{fontSize: '30px', color: '#222'}}>Store</li>
                </Link>
                <Link to={{pathname: "/orders"}}>
                  <li><ShoppingCartOutlinedIcon style={{ color: '#222', fontSize: '35px'}} /></li>
                </Link>
                
                
            </ul>
            </div>
            
        </header>
    );

}

export default Navbar;
//<img src={ require(`../../data/img/shopping-cart.png`)} ></img>