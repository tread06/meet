import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  //test events list
  test('render list of events', () => {
    //expect there to be exactly one 'EventList' component within the app
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  //test search text box
  test('render CitySearch', () => {
    //expect there to be exactly one 'CitySearch' component within the app
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  //test for number of components input
  test('render event number input', () => {
    //expect there to be exactly one 'NumberOfEvents' component within the app
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');

    //select a random index --- exclusive to account for the see all cites option
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    //items are filtered by the component
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);

    //get all events and filter them using the same selection
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );

    //compare filtered events with the state of the component
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('number of events updated when user selects a different count', async () => {
    const AppWrapper = mount(<App />);
    const numberInput = AppWrapper.find(NumberOfEvents).find('.number-input');
    await numberInput.simulate('change', {
      target: { value: 1 },
    });
    expect(AppWrapper.state('eventCount')).toEqual(1);
    AppWrapper.unmount();
  });
});
