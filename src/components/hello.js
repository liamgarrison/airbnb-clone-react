import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.myName = props.name
  }
  render() {
    return <div>Hello {this.myName} from hello.js</div>;
  }
}

export default Hello
