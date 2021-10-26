import React, { Component } from 'react';

class NumberOfEvents extends Component {
  //to do: add max number of events
  //shorthand for using the constructor to initialize state
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    let count = event.target.value;
    if (count < 0) count = 0;

    this.setState({
      numberOfEvents: count,
    });
    this.props.updateEventCount(count);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
          min="0"
        />
      </div>
    );
  }
}

export default NumberOfEvents;
