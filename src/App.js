import React, { Component } from 'react';

class App extends Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.com.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) return (<div>
      Loading... </div>);

    else {
      return (
        <div className="App">
          Data has been loaded

        </div>



      );
    }
  }
}

export default App;