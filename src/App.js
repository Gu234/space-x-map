import React from 'react';
import './App.css';

import { createApolloFetch } from 'apollo-fetch';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]
const map =
  <Map style={{ height: '200px' }} center={position} zoom={12}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>


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
      {map}
    </div>
  );
}

export default App;
