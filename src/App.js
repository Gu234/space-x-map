import React from 'react';
import './App.css';
import { createApolloFetch } from 'apollo-fetch';

const uri = 'https://api.spacex.land/graphql/';
const apolloFetch = createApolloFetch({ uri });

const query = `{
  launchpads {
    id
    location {
      latitude
      longitude
      name
      region
    }
  }
}`
apolloFetch({ query }) //all apolloFetch arguments are optional
  .then(result => {
    const { data, errors, extensions } = result;
    console.log(data);

    //GraphQL errors and extensions are optional
  })

  .catch(error => {
    //respond to a network error
  });

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
