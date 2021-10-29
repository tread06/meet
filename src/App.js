import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Component } from 'react';
import { getEvents, extractLocations } from './api';
import Banner from './banner';
import { BeatLoader } from 'react-spinners';
import { ErrorAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    isLoading: true,
    online: false,
  };

  componentDidMount() {
    this.mounted = true;
    this.setState({ isLoading: true });
    getEvents().then((events) => {
      this.updateOnlineStatus();
      if (this.mounted) {
        //to facilitate tests which unmount components immediatly and use mock data, only load data if the component is mounted
        this.setState({ events, locations: extractLocations(events) });
      }
      this.setState({ isLoading: false });
    });
  }

  updateOnlineStatus() {
    console.log('updating online status...');
    this.setState({ online: navigator.onLine });
    console.log('Online state: ' + this.state.online);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    this.setState({ isLoading: true });
    getEvents().then((events) => {
      this.updateOnlineStatus();
      this.setState({ online: navigator.onLine });
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
      this.setState({ isLoading: false });
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
        <ErrorAlert
          text={
            this.state.online
              ? ''
              : 'MeetApp is offline. Events may not be up to date.'
          }
        />
        <Banner />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
        <div className="loading-spinner">
          <BeatLoader
            loading={this.state.isLoading}
            color="#cc1f00"
            size={40}
          />
        </div>
        <EventList events={this.state.events} count={this.state.eventCount} />
      </div>
    );
  }
}

export default App;
