import { gql } from '@apollo/client';

export const ALL_LAPTOPS = gql`
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
      quantity
    }
  }
`;

export const ALL_ORDERS = gql`
  {
    allOrders {
      productName
      price
      id
      quantity
    }
  }
`;

export const CREATE_ORDER = gql`
    mutation createOrder($productName: String!, $price: String!, $quantity: Int!) {
        addOrder(
          productName: $productName,
          price: $price,
          quantity: $quantity
         
        ) {
            productName
            price
            quantity
        }  
    }    
`;

export const REMOVE_ORDER = gql`
    mutation deleteOrder($productName: String!, $price: String!, $quantity: Int!) {
        removeOrder(
          productName: $productName,
          price: $price,
          quantity: $quantity 
         
        ) {
            productName
            price
            quantity
        }  
    }    
`;