import React, { Component } from 'react';

class NumberOfEvents extends Component {
  //to do: add max number of events
  //shorthand for using the constructor to initialize state
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
    this.props.updateEventCount(event.target.value);
  };

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
