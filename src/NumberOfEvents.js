import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  //to do: add max number of events
  //shorthand for using the constructor to initialize state
  state = {
    numberOfEvents: 32,
    errorText: '',
  };

  handleInputChanged = (event) => {
    let count = event.target.value;
    let errorText = '';

    if (count <= 0 || count > 32) {
      errorText = 'Select a number from 1 to 32';
    }

    this.setState({
      numberOfEvents: count,
      errorText: errorText,
    });
    this.props.updateEventCount(count);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className='numberLabel' for="numberEvents">Number of Events</label>
        <input
          id="numberEvents"
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
          min="0"
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
