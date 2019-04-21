import * as React from 'react';

import ApolloClient from "apollo-boost";
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/app';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
