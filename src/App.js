import React from 'react';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      flatsFiltered: [],
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 13,
      selectedFlat: null,
      search: ""
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flats: data,
        flatsFiltered: data
      })
    })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
      center: {
        lat: flat.lat,
        lng: flat.lng
      }
    })
  }

  handleSearch = (event) => {
    const search = event.currentTarget.value;
    const regex = new RegExp(search)
    this.setState({
      search: search,
      flatsFiltered: this.state.flats.filter((flat) => regex.test(flat.name))
    })

  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search for a flat..."
            />
          </div>
          <div className="flats">
            {this.state.flatsFiltered.map((flat) => {
              return <Flat
                key={flat.name}
                flat={flat}
                selectFlat={this.selectFlat}
              />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCDnboOyLVqfv3q-FFjIkMsmU8F9mrO-5s" }}
          center={this.state.center}
          zoom={this.state.zoom}
        >
          {this.state.flats.map((flat) => {
            return <Marker
              key={flat.name}
              lat = {flat.lat}
              lng = {flat.lng}
              text={`${flat.price}€`}
              selected={this.state.selectedFlat === flat}
            />
          })}

        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
