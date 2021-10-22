import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Component } from 'react';
import { getEvents, extractLocations } from './api';
import Banner from './banner';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        //to facilitate tests which unmount components immediatly and use mock data, only load data if the component is mounted
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateEventCount = (count) => {    
    this.setState({
      eventCount: count,
    });
  };

  render() {
    return (
      <div className="App">
        <Banner />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} count={this.state.eventCount} />
      </div>
    );
  }
}

export default App;
