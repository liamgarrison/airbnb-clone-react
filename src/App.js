import React from 'react';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 10
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flats: data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          {this.state.flats.map((flat) => {
            return <Flat flat={flat}/>
          })}
        </div>
        <div className="map">
          <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCDnboOyLVqfv3q-FFjIkMsmU8F9mrO-5s" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >

        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
