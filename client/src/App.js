import React from 'react';
import styles from './App.module.css';
import {  Laptops, Orders, Navbar, Review } from './components';
import { Link } from 'react-router-dom';
import data from './data/data.json'
import firebase from './firebase';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

const ALL_LAPTOPS = gql`
  {
    allLaptops {
      productName
      id
      price
      cpu
      image
      ram
      storage
      screen
      description
    }
  }
`;


function App() {

  const result = useQuery(ALL_LAPTOPS);

  if(result.loading) {
    return <div>Loading...</div>
  }
  if(result.error) {
    return <div>Something went wrong!</div>
  }
 
  return (
    <div className="App">
      <Navbar />
  
        <div className={styles.Container}>
       
            <h1>The Laptop Store</h1>
               
            
            <div className={styles.cards_container}>
              {result.data.allLaptops.map(laptop => (
                
                <Laptops key={laptop.id} data={laptop} />
                
              )
              )}
            </div>
          
        </div>
    </div>
  );
}


export default App;
