import { gql, useMutation } from '@apollo/client';

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
    }
  }
`;

export const ALL_ORDERS = gql`
  {
    allOrders {
      productName
      price
      id
    }
  }
`;

export const CREATE_ORDER = gql`
    mutation createOrder($productName: String!, $price: String!) {
        addOrder(
          productName: $productName,
          price: $price,
         
        ) {
            productName
            price
            
        }  
    }    
`;