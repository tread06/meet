import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    const filteredEvents = events.slice(0,this.props.count);
    
    return (
      <ul className="EventList">
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}
export default EventList;