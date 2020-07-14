import React from 'react';
import styles from './App.module.css';
import {  Laptops, Navbar } from './components';
import { gql, useQuery } from '@apollo/client';

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
    return <h1 style={{textAlign: "center"}}>Something went wrong!</h1> 
    
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