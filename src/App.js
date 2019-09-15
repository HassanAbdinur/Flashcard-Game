import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        num1: 1,
        num2: 1,
        score: 0,
        response: ""
    }
  }


  render() {
    return(
      <div>
      <h1>{this.state.num1} + {this.state.num2}</h1> 
       <input onChange={this.updateResponse} value={this.state.response } />
       Current guess is {this.state.response}
      </div>
    );
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value
    });
  }
}

export default App;
