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
       <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response } />
       <div>
         Score: {this.state.score}
       </div>
      </div>
    );
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value
    });
  }
  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      
    }
  }
}

export default App;
