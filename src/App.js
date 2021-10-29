import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { Component } from 'react';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import Banner from './banner';
import { BeatLoader } from 'react-spinners';
import { ErrorAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    isLoading: true,
    online: navigator.onLine,
    showWelcomeScreen: false,
  };

  async componentDidMount() {
    this.mounted = true;
    this.setState({ isLoading: true });

    //validate access token --- update show welcome screen status

    if (this.state.online) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');

      //if a code is found or a the token is valid, don't show the welcome screen
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      console.log('online: true');
      console.log('isTokenValid: ' + isTokenValid);
      console.log('Show welcome screen: ' + this.state.showWelcomeScreen);

      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            //to facilitate tests which unmount components immediatly and use mock data, only load data if the component is mounted
            this.setState({ events, locations: extractLocations(events) });
          }
          this.setState({ isLoading: false });
        });
      }
    } else {
      console.log('online: false');
      if (this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            //to facilitate tests which unmount components immediatly and use mock data, only load data if the component is mounted
            this.setState({ events, locations: extractLocations(events) });
          }
          this.setState({ isLoading: false });
        });
      }
    }
  }

  updateOnlineStatus() {
    this.setState({ online: navigator.onLine });
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
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App"></div>;

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
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
