import React, { Component } from 'react';

class Event extends Component {
  state = {
    detailsHidden: true,
  };

  toggleDetails = () => {
    const toggled = !this.state.detailsHidden;
    this.setState({
      detailsHidden: toggled,
    });
  };

  render() {
    return (
      <div className="event">
        <h2 className="event-name">{this.props.event.summary}</h2>
        <div className="divider"></div>
        <p className="event-date-time">{this.props.event.start.dateTime}</p>
        <p className="event-location">{this.props.event.location}</p>
        {!this.state.detailsHidden && (
          <div className="event-details">
            <div className="divider"></div>
            <p className="event-description">{this.props.event.description}</p>
          </div>
        )}
        <button className="toggle-details-button" onClick={this.toggleDetails}>
          {this.state.detailsHidden ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}
export default Event;
