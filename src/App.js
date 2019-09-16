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


  renderProblem() {
    return(
      <div className="flashCard">
      <h1>{this.state.num1} + {this.state.num2}</h1> 
       <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response } />
       <div>
         Score: {this.state.score}
       </div>
      </div>
    );
  }

  renderWin() {
    alert("Congratulations you win!");
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value
    });
  }
  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(this.state.response); 
      if (answer === this.state.num1 + this.state.num2) {
          // Answer is right
          this.setState( State => ({
            score: State.score + 1,
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            response: ""
          }));
      } else {
        //Answer is wrong
        this.setState({
          response: ""
        })
      }
    }
  }
}

export default App;
