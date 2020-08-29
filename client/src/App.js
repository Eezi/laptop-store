import React, {useState} from 'react';
import styles from './App.module.css';
import {  Laptops, Navbar } from './components';
import { useQuery } from '@apollo/client';
import { ALL_LAPTOPS } from './queries';


const Notify = ({errorMessage}) => {
  if(!errorMessage) {
      return null
  }
  return(
      alert({errorMessage})
  )
}

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_LAPTOPS);

  if(result.loading) {  
    return <div>Loading...</div>
  }
  
  if(result.error) {
    return <h1 style={{textAlign: "center"}}>Something went wrong!</h1> 
   
   
  }
console.log('reeesss', result)
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }
 
  return (
    <div className="App">
          <Navbar />
          <Notify errorMessage={errorMessage} />
        <div className={styles.Container}>
       
            <h1>The Laptop Store</h1>
               
            
            <div className={styles.cards_container}>
              {result.data.allLaptops.map(laptop => (
                
                <Laptops key={laptop.id} data={laptop}  />
                
              )
              )}
            </div>
          
        </div>

    </div>
  );
}


export default App;
