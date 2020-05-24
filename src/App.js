import React from 'react';
import styles from './App.module.css';
import {  Laptops, Orders, Navbar } from './components';
import { Link } from 'react-router-dom';
import data from './data/data.json'


function App() {
  
  return (
    <div className="App">
      <Navbar />
  
        <div className={styles.Container}>
       
            <h1>The Laptop Store</h1>
                    
            
            <div className={styles.cards_container}>{data.map((el) => {
                return(<Laptops
                  key={el.id}
                  id={el.id}
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

       
       
    </div>
  );
}


export default App;
