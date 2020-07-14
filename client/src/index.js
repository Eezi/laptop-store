import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Laptops, ReviewLaptop, Orders } from './components';
import { 
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path={"/laptops"} component={Laptops} />
      <Route path={"/review/"} component={ReviewLaptop} />
      <Route path={"/orders"} component={Orders} />    
    </Switch>
  </Router>
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
