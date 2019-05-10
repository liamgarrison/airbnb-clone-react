import React from 'react'
import './marker.css'

class Marker extends React.Component {
  render() {
    return (
      <div className="marker">
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default Marker
