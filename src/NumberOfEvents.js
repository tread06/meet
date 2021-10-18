import React, { Component } from 'react';

class NumberOfEvents extends Component {
  //shorthand for using the constructor to initialize state
  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) =>{
    const value = event.target.value;        
    this.setState({
      numberOfEvents: value
    });
  }


  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
